// Server-side shared token authentication for the Administration page.
// Secrets must be configured in Cloudflare Pages, never in the GitHub source.
export const COOKIE_NAME = '__Host-wtfd_admin';
const SESSION_SECONDS = 8 * 60 * 60;
const encoder = new TextEncoder();

function hex(bytes) { return [...bytes].map(b => b.toString(16).padStart(2, '0')).join(''); }
function fromHex(value) {
  if (!/^[a-f0-9]+$/i.test(value) || value.length % 2) return null;
  return new Uint8Array(value.match(/.{2}/g).map(n => parseInt(n, 16)));
}
function sameBytes(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}
async function sha256(value) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}
async function sign(value, secret) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), {name:'HMAC', hash:'SHA-256'}, false, ['sign']);
  return hex(new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode('wtfd-admin-v1:' + value))));
}
export function configured(env) {
  return typeof env.ADMIN_ACCESS_TOKEN === 'string' && env.ADMIN_ACCESS_TOKEN.length >= 12;
}
export async function validToken(input, env) {
  if (!configured(env) || typeof input !== 'string' || input.length > 256) return false;
  return sameBytes(await sha256(input), await sha256(env.ADMIN_ACCESS_TOKEN));
}
export async function makeCookie(env) {
  const exp = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  const mac = await sign(exp, env.ADMIN_ACCESS_TOKEN);
  return COOKIE_NAME + '=' + exp + '.' + mac + '; Max-Age=' + SESSION_SECONDS + '; Path=/; Secure; HttpOnly; SameSite=Lax';
}
export function clearCookie() {
  return COOKIE_NAME + '=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Lax';
}
export async function isAuthorized(request, env) {
  if (!configured(env)) return false;
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/(?:^|;\s*)__Host-wtfd_admin=([0-9]+\.[0-9a-f]{64})(?:;|$)/);
  if (!match) return false;
  const [expires, mac] = match[1].split('.');
  const now = Math.floor(Date.now() / 1000);
  const exp = Number(expires);
  if (!Number.isSafeInteger(exp) || exp <= now || exp > now + SESSION_SECONDS) return false;
  return sameBytes(fromHex(mac), fromHex(await sign(expires, env.ADMIN_ACCESS_TOKEN)));
}
