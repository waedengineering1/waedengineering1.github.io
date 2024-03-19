'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "332261a11ffbf0733e9cc2b3b9ab3d2b",
"assets/AssetManifest.bin.json": "34121234946f2d750b674521dd97f05e",
"assets/AssetManifest.json": "32560f9788f9171b60dfd5e3c2ac897f",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/images/1.5x/logo.png": "cb119a74e0de4b8f6589068389cf19a1",
"assets/assets/images/2.0x/logo.png": "4f380d1a36c34d6f9a40920ebc2bf71a",
"assets/assets/images/3.0x/logo.png": "25af69a892efb9d95bd1225f15dcce1b",
"assets/assets/images/4.0x/logo.png": "5e610bb6bbf8c98cfbd41542a3034ae9",
"assets/assets/images/logo.png": "c24bd5446a58c448f76ca51520eacb84",
"assets/assets/images/P1%2520(10).jpeg": "c134980e5bb9d08541d961c6915f522a",
"assets/assets/images/P1%2520(11).jpeg": "8a8d8ae607ca88e74e5ac32ce42e20e4",
"assets/assets/images/P1%2520(12).jpeg": "553e067f116c39a9c15c8dbe9060c031",
"assets/assets/images/P1%2520(13).jpeg": "eac6e7869277eddb63c0b898065fa52b",
"assets/assets/images/P1%2520(14).jpeg": "c134980e5bb9d08541d961c6915f522a",
"assets/assets/images/P1%2520(15).jpeg": "eac6e7869277eddb63c0b898065fa52b",
"assets/assets/images/P1%2520(16).jpeg": "1dc182c6750cbe60f7f37b038906057b",
"assets/assets/images/P1%2520(17).jpeg": "a38f8bc5cb64ea27d4a441f7bd674261",
"assets/assets/images/P1%2520(18).jpeg": "d52c5a2f2290f17872cbeb951e72da19",
"assets/assets/images/P1%2520(19).jpeg": "9e1293edf1ea141128207529d48b5828",
"assets/assets/images/P1%2520(2).jpeg": "27e57b667f492454e5f6e74181908b5c",
"assets/assets/images/P1%2520(20).jpeg": "f0db56bd08db75df3a7180ee333c9935",
"assets/assets/images/P1%2520(21).jpeg": "33aac81975c1bddfe9e51eb6dcf2f148",
"assets/assets/images/P1%2520(22).jpeg": "2c456d91722f2c1b48582164c5f6b519",
"assets/assets/images/P1%2520(23).jpeg": "8f3d828ddb6bb2ef73c906b2b0c61172",
"assets/assets/images/P1%2520(24).jpeg": "cb3a477a2852f63c85c1892e9c95102c",
"assets/assets/images/P1%2520(25).jpeg": "8d38ce351e396b5645a34e7df3a08e28",
"assets/assets/images/P1%2520(26).jpeg": "8fcfefe6c0f05dd89b138cd9072c11cd",
"assets/assets/images/P1%2520(27).jpeg": "0c5cd46cae155edf48e17aa46cf324cc",
"assets/assets/images/P1%2520(28).jpeg": "ee9e4fc160402355284e8ad23e7a3a6a",
"assets/assets/images/P1%2520(29).jpeg": "c37612db5ffc8bf64be2c78fb5e4c361",
"assets/assets/images/P1%2520(3).jpeg": "e63ee7e02a48d85498ba21665789cbf3",
"assets/assets/images/P1%2520(30).jpeg": "4a17e8af7fdc47b7f28c40f7f2177ef2",
"assets/assets/images/P1%2520(31).jpeg": "993d38ec708465d764adef5084b5ad76",
"assets/assets/images/P1%2520(32).jpeg": "525d89decc5f127bc2826b88636a7751",
"assets/assets/images/P1%2520(33).jpeg": "d451642119e65cb312f8de0bfd9a2ba0",
"assets/assets/images/P1%2520(34).jpeg": "0c70d3d57d14d5716f5144e4a0758e0f",
"assets/assets/images/P1%2520(35).jpeg": "9a37c07c610e7d9a618dfc6994b21c73",
"assets/assets/images/P1%2520(36).jpeg": "0dc0a24c681e2f2dc35a50510e80807d",
"assets/assets/images/P1%2520(37).jpeg": "6148d46db35aa1782ad354ba78cc1681",
"assets/assets/images/P1%2520(38).jpeg": "7338007d153d33562f1597c20a500614",
"assets/assets/images/P1%2520(39).jpeg": "8f21e51d5bdbc7136b49447d7545e4c1",
"assets/assets/images/P1%2520(4).jpeg": "6d72b351b6a27e9eb0fa05ba4bfd7e89",
"assets/assets/images/P1%2520(40).jpeg": "3f2bd23be911c72d44f02c8eb66e8928",
"assets/assets/images/P1%2520(41).jpeg": "e28083b28f4904aeccfdf29afe8d8513",
"assets/assets/images/P1%2520(42).jpeg": "148956bb651907b784e059496c5a218b",
"assets/assets/images/P1%2520(43).jpeg": "202c7336449b294c28ad959468d02444",
"assets/assets/images/P1%2520(44).jpeg": "015570e452ef87021b80734cd8276a59",
"assets/assets/images/P1%2520(5).jpeg": "14c7ff234a1924b77c59a8d7751e9ef9",
"assets/assets/images/P1%2520(6).jpeg": "6139e27dd76384573a4892dd346e3504",
"assets/assets/images/P1%2520(7).jpeg": "0f834f123b2689940b3f7549c2a7d33b",
"assets/assets/images/P1%2520(8).jpeg": "ffdc4f34cf295aed00942c6d5f536d63",
"assets/assets/images/P1%2520(9).jpeg": "cf35362fa57300160a0d6833ff97dafa",
"assets/FontManifest.json": "de233ba3a41197b9b60806d001f7790a",
"assets/fonts/MaterialIcons-Regular.otf": "35e684208d0a5e5b2887f9dd8e8374e0",
"assets/NOTICES": "2e0500ebfeaa20c333a85cc304187004",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e1f726b90a120e3542820f7eb5f60553",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7d6806e57c64247679ab31337d299858",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "729502467527135290cb26f1247ce450",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55c0c170c6cf0829962eb697312523ad",
"/": "55c0c170c6cf0829962eb697312523ad",
"main.dart.js": "a820587d2d6a5d0867795ade3dc72997",
"manifest.json": "67dec33ef8d0b70b5c41b2918f60ded0",
"version.json": "bb90047ae5abb8873f27765d3a321bad"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
