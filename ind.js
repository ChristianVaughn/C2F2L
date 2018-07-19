if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js');
}

// link to a image file
var iconUrl = 'https://www.seeklogo.net/wp-content/uploads/2014/10/Google-Chrome-logo-vector-download.png';

// create the <img> html element
// on first load it will request the image
// second time it will load it from cache directly thanks to the service worker
var imgElement = document.createElement('img');
imgElement.src = iconUrl;
