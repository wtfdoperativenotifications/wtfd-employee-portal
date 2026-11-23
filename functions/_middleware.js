import { configured, validToken, makeCookie, isAuthorized, clearCookie } from './_lib/admin-auth.js';

function headers(extra = {}) {
  return {
    'Cache-Control': 'private, no-store, max-age=0',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'X-Robots-Tag': 'noindex, nofollow',
    ...extra
  };
}

function loginPage(message = '', status = 200) {
  // The token is submitted only by POST and is never embedded in HTML or a URL.
  const warning = message ? '<p role="alert" class="notice">' + message + '</p>' : '';
  const html = '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>WTFD Administration Access</title><link rel="stylesheet" href="/admin.css"></head>' +
    '<body><header><div class="shell header-inner"><div class="brand">' +
    '<img src="/assets/wtfd-logo.png" alt="WTFD"><div>' +
    '<div class="dept">Washington Township Fire Department</div>' +
    '<h1>Administration Access</h1><p>Authorized administrative personnel</p>' +
    '</div></div><a href="/">← Employee Portal</a></div></header>' +
    '<main class="shell"><section class="intro"><div class="eyebrow">Restricted area</div>' +
    '<h2>Enter Administration Access Token</h2><p>Access is limited to authorized personnel.</p></section>' +
    '<form method="POST" action="/admin" class="access-form">' +
    '<label for="access-token">Access token</label>' +
    '<input id="access-token" name="access_token" type="password" autocomplete="off" required maxlength="256">' +
    warning +
    '<button type="submit">Open Administration Portal</button></form></main>' +
    '</body></html>';
  return new Response(html, { status, headers: headers({
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Security-Policy': "default-src 'none'; style-src 'self'; img-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'"
  })});
}

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  // Cloudflare Pages serves admin.html at its canonical extensionless /admin URL.
  // Never redirect /admin back to /admin.html; Pages may normalize in the other direction.
  const isAdminPage = url.pathname === '/admin' || url.pathname === '/admin/' || url.pathname === '/admin.html';
  const isAdminAction = url.pathname === '/admin/po' || url.pathname === '/admin/po/';
  if (!isAdminPage && !isAdminAction) return context.next();

  if (!configured(context.env)) {
    return new Response('Administration access is not configured. Set ADMIN_ACCESS_TOKEN in Cloudflare Pages encrypted secrets.', {
      status: 503, headers: headers({'Content-Type':'text/plain; charset=utf-8'})
    });
  }
  if (isAdminPage && request.method === 'POST') {
    if ((request.headers.get('Content-Length') || '0') * 1 > 4096) {
      return loginPage('Invalid access token.', 400);
    }
    let data;
    try { data = await request.formData(); } catch { return loginPage('Invalid submission.', 400); }
    if (data.get('action') === 'logout') {
      return new Response(null, { status:303, headers: headers({
        'Location':'/index.html', 'Set-Cookie':clearCookie()
      })});
    }
    if (await validToken(data.get('access_token'), context.env)) {
      return new Response(null, { status:303, headers: headers({
        'Location':'/admin','Set-Cookie':await makeCookie(context.env)
      })});
    }
    return loginPage('The token entered is incorrect.', 401);
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', {status:405, headers:headers({'Allow':'GET, HEAD, POST'})});
  }
  if (!await isAuthorized(request, context.env)) {
    if (isAdminAction) return Response.redirect(url.origin + '/admin', 303);
    return loginPage();
  }
  // Do not let Cloudflare cache the HTML supplied to authenticated visitors.
  const response = await context.next();
  const out = new Response(response.body, response);
  out.headers.set('Cache-Control','private, no-store, max-age=0');
  out.headers.set('X-Robots-Tag','noindex, nofollow');
  out.headers.set('Referrer-Policy','no-referrer');
  return out;
}
