// The Administration middleware authenticates this path before execution.
// Keep the purchase-order access key out of public source control.
export async function onRequestGet({ env }) {
  const key = env.PO_DASHBOARD_KEY;
  if (typeof key !== 'string' || !key) {
    return new Response('Purchase Orders link is not configured. Set PO_DASHBOARD_KEY in Cloudflare Pages encrypted secrets.', {
      status: 503, headers: {
        'Content-Type':'text/plain; charset=utf-8',
        'Cache-Control':'private, no-store',
        'X-Content-Type-Options':'nosniff'
      }
    });
  }
  return new Response(null, {
    status: 302,
    headers: {
      'Location':'https://wtfd-po-dashboard.hartleywtfd.workers.dev/?key=' + encodeURIComponent(key),
      'Cache-Control':'private, no-store, max-age=0',
      'Referrer-Policy':'no-referrer',
      'X-Robots-Tag':'noindex, nofollow'
    }
  });
}
