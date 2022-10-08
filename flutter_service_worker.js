'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e26789eebe78c89c47b8ac0afb63e3be",
"assets/FontManifest.json": "123ef3ce9bbd0e662477e72c9346d181",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/fonts/El_Messiri/ElMessiri-Bold.ttf": "2eca6375a3436f21364c07d7b5bf4415",
"assets/lib/assets/fonts/El_Messiri/ElMessiri-Medium.ttf": "f3f09071314a0a9d44166ab888c223a3",
"assets/lib/assets/fonts/El_Messiri/ElMessiri-Regular.ttf": "426e9ab9c8159228a4a2db62d8a24f29",
"assets/lib/assets/fonts/El_Messiri/ElMessiri-SemiBold.ttf": "c493817a2670c3502c74ce83c37da5dc",
"assets/lib/assets/images/Login/google.png": "a2229b88eeb7a5118f0a2c38b1862c58",
"assets/lib/assets/images/Login/Login1.png": "26c5dc0f39f29a528fa69147121364fa",
"assets/lib/assets/images/Login/test.pem": "bbfbac2e3e925b8404ff1ad84a9bd777",
"assets/lib/assets/images/Login/Untitled-1.png": "278e75f8dfa599bbee2ff0f547ae4950",
"assets/lib/assets/images/onBording/First.png": "1b30d66f2436bb664049d2f2a446a14e",
"assets/lib/assets/images/onBording/Second.png": "59b963a4cd198c32b30507dedb1599ef",
"assets/lib/assets/images/onBording/Third.png": "ca5f688ecb66792639c2f79fba4c2fd8",
"assets/lib/assets/images/register/reg.png": "7218b99fcd088357d17fc2e674c37081",
"assets/NOTICES": "9e99fd11170d7db397a0d8b94a0c7c7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/emoji_alert/assets/images/angry.png": "2014fd93537401d7b686cf5bb0ff00ee",
"assets/packages/emoji_alert/assets/images/confused.png": "7aaa9691248486682948d20575f3778b",
"assets/packages/emoji_alert/assets/images/cool.png": "e1085fca6a978e6a30bdbc3d2add03db",
"assets/packages/emoji_alert/assets/images/happy.png": "a07aec7220caf56032c2ad45f27c5318",
"assets/packages/emoji_alert/assets/images/joyful.png": "f0a8ce67861f977e4799698454e8d1a2",
"assets/packages/emoji_alert/assets/images/laughing.png": "d94e33b50d827fd87f6b6de33abf3f59",
"assets/packages/emoji_alert/assets/images/sad.png": "fad0d21863486e9fef44e02f642d2954",
"assets/packages/emoji_alert/assets/images/scared.png": "ce864d04dd7abc6f94cfb9c2b10c5dc2",
"assets/packages/emoji_alert/assets/images/shocked.png": "7f3c5ddb8e39c3449e648d476a978858",
"assets/packages/emoji_alert/assets/images/smile.png": "02543668b6881fcae92fd9cbc78f70de",
"assets/packages/emoji_alert/assets/images/wink.png": "7eedaaef478d3f2ad4ecb4d1366b4392",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "2b426bba7a43ab9edfc28c1a0b143b36",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "1fff740f6f322398c7f0bc1c87ce9d9f",
"icons/Icon-512.png": "ad62e756278c5a6a0ba156d24cddc115",
"icons/Icon-maskable-192.png": "1fff740f6f322398c7f0bc1c87ce9d9f",
"icons/Icon-maskable-512.png": "ad62e756278c5a6a0ba156d24cddc115",
"index.html": "451c12f1fdb49070257a6d2fe840db42",
"/": "451c12f1fdb49070257a6d2fe840db42",
"main.dart.js": "9f9302a51304983a4ab2bbad57b52e9c",
"manifest.json": "069618753bb20a7d3dbe6568899dca7d",
"splash/img/dark-1x.png": "554e324714d8071c535944cff94a3834",
"splash/img/dark-2x.png": "d63b53e30fa7b69a5763df87d2562fff",
"splash/img/dark-3x.png": "1b1b8faa7dd3c6c2a809500ffa28c4e8",
"splash/img/dark-4x.png": "e60718dfdf7ebcd1c36e192167a80ae1",
"splash/img/light-1x.png": "554e324714d8071c535944cff94a3834",
"splash/img/light-2x.png": "d63b53e30fa7b69a5763df87d2562fff",
"splash/img/light-3x.png": "1b1b8faa7dd3c6c2a809500ffa28c4e8",
"splash/img/light-4x.png": "e60718dfdf7ebcd1c36e192167a80ae1",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "73d027c689b0eef66273ca2d6d922b5d",
"version.json": "c8b76c2f866bf1803284b0fc24aa4343",
"web.rar": "04eae63d763d2466c73b6a02ea109483"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
