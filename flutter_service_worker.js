'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "14cda816dd67967dbd93d736caf30b04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "25b45b296375f55cf224259b8c11b5a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44aa625e480a2677b463df62272ffdd2",
".git/logs/refs/heads/main": "b87c9144226bfc7ed5d8a035a0ce184f",
".git/logs/refs/remotes/origin/main": "5e1cf7431c81f6c4afa32ced6beeadf1",
".git/objects/00/f79128181bd47ad0934b1279e7a40bf4d6fb06": "86086105633325dc58f5978b40182fbc",
".git/objects/09/72cf1f9fadad63a00b04a258db4b53b4a909e1": "3a0ce6a727253d1e6b15ce798905c25f",
".git/objects/0a/a9f807b944c5d6193427f1d8e73061b9383e91": "f0735e0749e2ec20f0207b2530bf7946",
".git/objects/0e/15e11d583269806c343a1e98470f69966129da": "b7c5a38e9bbaeff256e6d44283a278e3",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/16/871008377032e3ce3db1c342bec77c3c389bac": "751b1f5fadbccd4e9ecdbe18d7ea393b",
".git/objects/16/8efab2491894cae908cbfada88986716c99c87": "3501ec81612ecf72b034e2e011243005",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/079c184f099030cc08a299c3f5dec4b07f2252": "f3ddb6e27c698b4def8bb83e42c356f9",
".git/objects/23/4b3d2d674b201482e2258617f38a49594a0db9": "5a609870cc6a5a51439f28593458a8b3",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/36/299f7d015a5b47399a868b3665dc220de53a05": "6cc615b265ddbf9f8998106f7b0baccb",
".git/objects/39/a5bcfbcef7f9669dad7ca8a0e20a44535b0b50": "82a018c84c05b717a78f2f84695254ea",
".git/objects/3a/3bea53aa04e1212de9cbe4d356d3948ad4fc38": "a493b9dfea1d1dba06c4342a2d24d433",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/baf6c0025b114491e9014a289a011d25623e3e": "7927c2115adc87a9b21baaaf999a78bc",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/53/711f1c1728895e1c92f3bf7da54fa9b0eeb303": "443a1a10b4de0746f32379259e72711d",
".git/objects/5a/61b85857c6dcb34e9a678864b7323b7cfed0a1": "5a91387086db543332d2a60fbf92e62c",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/66/57313dab2ede84ef21b241855aad47c881cc3a": "26b07dce1d3586420de0f67edb1ea24b",
".git/objects/6f/2a500a9c367e82c58da1199776404b12483c78": "5a8b4a3bdacbcf628fbcb8ba9a3024ff",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/71/9df83fb966013d7581a8b41145935c069ad162": "6bd8f5b78f0f864b74ad0ef7a29d2da8",
".git/objects/78/4d26cabd585599e0f3e661410936ed67269c4e": "0931df09cab2285829c17b7feed74d45",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/86/92726cf12ddffcb1dafe7cf715a25ad7380e57": "86ca26b2ca1b590f649482e736838df3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9367ec4abb9a68ec9096e504a4babd074ed648": "9136a51723a1d5efe03f873d75047134",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/3b2f60dcd56dcc63a5ddc9facce0a94ea7c27f": "a025da85144dda1fddb19cc8e422fe2d",
".git/objects/94/50f1246ae54974f62adca7cab977313c0f67e3": "aa7b783142506e2f1cf0b65cf120ac03",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/4af604efa6ae2a86756ac6210b233f8c513447": "3ca03b9c89332df00824a90289806fde",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/16c48926a7d54f2f88a2f0f52f94bd0552dc20": "01bcbff330b5c640c53eb6555c021c16",
".git/objects/a7/2290618474c8a5d11861b547428974aab42144": "f746ebae27d582aa5a067015e71440d8",
".git/objects/ab/62ffe0f2493d033bc49d128d8d343b7b2ea4a3": "5f37fb9e85b009d8c0b8edd8a39917d3",
".git/objects/b3/5e3acb45a5a1942b2c93d626ea8f93ad9d2b85": "ce5aea005d15a12a7c57485a5491176c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/c2/3ab10edd3e470f2b13df5d4be79beed9482299": "05723bdc3e6258f986faaaab89ce2d84",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c6/d41c06b2a9729566c8f384eeb83bf5c7959233": "6fd03beba775568cdcdbcd8cae3cfc83",
".git/objects/ca/f4612e9e6f526228cf08b1858c9372edc8c95d": "0ec6a3167b3c96c093db0cf7956fd362",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/44513c489e8ec9338363dc5bd2e24df0550b19": "a24c3cfd8cf9511d6805aee12e32af07",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/2c8fdb9554874833188e9c23e238a3b52539fc": "81fc6a080fdc974e0fa71e026d93422e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f379cad99ba63264625e7fd9fdbeb795a9436f": "e17534d4042514304997e5d145500e51",
".git/objects/e9/2f7b2c0f9210085690668ad4ff22d2c20c5d41": "d128f63e5f934e075fcda944a54aea67",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/ee/fd1f7509dfd3f8db071ddcf1b789d54177e32d": "5d3233f80ec877c8f876ec37cb63a5e7",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/fc/1ee51a4412128195f4340f18c0ab5524180f36": "7008b9f10cac8c16b6eaad8cb6f2a416",
".git/refs/heads/main": "ca4128234eab34961e0f0491fb2a96f6",
".git/refs/remotes/origin/main": "ca4128234eab34961e0f0491fb2a96f6",
"assets/AssetManifest.json": "67367c3c64b9177271fea4e2b29172aa",
"assets/assets/fonts/Kollektif-Bold.ttf": "04c38a99d8afcbb092591a7a88a39a88",
"assets/assets/fonts/Kollektif-BoldItalic.ttf": "6763df240291636923f89e208ef12b5e",
"assets/assets/fonts/Kollektif-Italic.ttf": "a28604a01636f3a9249559626bc6e5ab",
"assets/assets/fonts/Kollektif.ttf": "4d49be6e42d18464b230d87d1fab175a",
"assets/assets/images/API.png": "e2125637287996a692c23a9c855671aa",
"assets/assets/images/background.png": "b584956ac0764f1c42b42483ed97e3bb",
"assets/assets/images/CO2.png": "0f1d4d1829ae67d7126b30fd2153ece3",
"assets/assets/images/confused.png": "4b87552f86c0f172b39d8124aa7a3cb3",
"assets/assets/images/global-warming.png": "8638e083f204fd4ac11e529569fa082c",
"assets/assets/images/graph.png": "3708bb9cc424e3c94f89d03d73c3e8ad",
"assets/assets/images/logo1.png": "7b2c0666fc7effe03020c68e50c1661b",
"assets/assets/images/map.png": "b51ba92184206c56fa3de2c7839263e4",
"assets/assets/images/matter.png": "3a3735d338a9d6497f424eae0fcb3ae7",
"assets/assets/images/sea-level.png": "d3271f5e6b62bf754e3514946d5f6d6e",
"assets/assets/images/title1.png": "6d33c8af41b07f2ddeeda46b9daa32a1",
"assets/assets/images/transport.png": "521d9e0d471a0d84c4f66a38259a83c5",
"assets/assets/images/vegetation.png": "42bcf84ba13116453204b0a287b9ae31",
"assets/assets/json/world_map.json": "80bdf06bacdd991fc5ba67cff2cf0216",
"assets/FontManifest.json": "68bac5100049820ca7f16665dc7c97ce",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b5434075759207e3557bafc7d535798a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "225f0d357afa65de530a6fbd7f197b8b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a62f8161518f115f4fa8efb98f7271fe",
"/": "a62f8161518f115f4fa8efb98f7271fe",
"main.dart.js": "8bf8f250e6b293851c184f21e1131ec1",
"manifest.json": "6ac0ea24a1d8599d51b9dfc950e530f9",
"version.json": "98cab8050927a15a81c5b3e87380c8aa"
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
