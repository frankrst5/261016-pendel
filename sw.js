// App-Shell offline vorhalten; API-Aufrufe gehen immer ans Netz.
const CACHE = 'pendel-v33';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: true});
    // Seite immer beim Server nachfragen (GitHub Pages lässt Browser sonst bis zu 10 min die alte Fassung nutzen)
    const net = fetch(e.request, e.request.mode === 'navigate' ? {cache: 'no-cache'} : {}).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; });
    if (e.request.mode !== 'navigate') return hit || net.catch(() => hit);
    // Seite selbst: neueste Version bevorzugen, nach 1,5 s oder offline die gespeicherte
    const timeout = new Promise(ok => setTimeout(() => ok(hit), 1500));
    return Promise.race([net.catch(() => hit), hit ? timeout : net]).then(r => r || net);
  }));
});
