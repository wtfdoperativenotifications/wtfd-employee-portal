# WTFD Employee Portal – Administration shared token access

The public Employee Portal remains available without sign-in. The Administration page at /admin (Cloudflare's canonical path for admin.html) requires an access token validated by a Cloudflare Pages Function. The token is never present in JavaScript, HTML, or GitHub.

## Cloudflare Pages setup (required before the protected page can be opened)

In Cloudflare dashboard → Workers & Pages → **the Pages project serving links.washingtontwpfire.org** → Settings → Variables and Secrets:

1. Add encrypted secret **ADMIN_ACCESS_TOKEN** with your chosen shared token (minimum 8 characters). Use the separately provided token; do not reuse the Purchase Orders key.
2. Add encrypted secret **PO_DASHBOARD_KEY** with the purchase-order dashboard key supplied by the administrator. Store only its value, without the ?key= portion.
3. Apply these to **Production** (and Preview if testing there), then redeploy the latest GitHub-connected Pages build so the Functions receive the variables.

**Do not commit secret values into GitHub, admin.html, app.js, CSS, or wrangler files.**

The access check is in functions/_middleware.js; its signed HttpOnly secure session cookie is valid for eight hours. Logout clears that cookie. The admin HTML is delivered with no-store response headers. /admin/po is guarded by the same middleware and redirects to the purchase-order dashboard with its encrypted PO_DASHBOARD_KEY appended as ?key=. No key is embedded in public source code.

If either secret is missing, the relevant functionality returns HTTP 503 rather than allowing access without a token.

## Deployment verification

- Anonymous GET /admin displays the access-token form, never the dashboard cards.
- Wrong token returns the login form and HTTP 401.
- Correct token allows /admin via a secure HttpOnly cookie.
- GET /admin/po without a valid session redirects to the token form.
- GET /admin/po after sign-in redirects to the purchase-order dashboard, including its key.
- Sign out removes the session.
- Public /index.html remains available.
- If /admin opens without a token prompt after deploying, the Cloudflare Pages Functions are **not active** and this authentication must not be considered deployed.

**Important:** Protecting the directory of links does not protect the linked dashboards themselves; each destination must enforce its own security. Anyone possessing the PO dashboard URL with its query key may be able to open that dashboard directly.

For additional security, configure Cloudflare WAF rate limiting on POST /admin to discourage token-guessing.
