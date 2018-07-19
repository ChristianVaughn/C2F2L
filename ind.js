if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('./worker.js').then(function(reg) {
    console.log('Successfully registered service worker', reg);
}).catch(function(err) {
    console.warn('Error whilst registering service worker', err);
});
}
