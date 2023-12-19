const endlessCollection = new Ajaxinate({
    container: '#product-grid',
    pagination: '.infinite_next',
    callback: callBack()
});

function callBack() {
    setTimeout( function() {
        StampedFn?.reloadUGC();
    },3000)
}

window.addEventListener("filteredCollection", function(el) {
    const endlessCollection = new Ajaxinate({
        container: '#product-grid',
        pagination: '.infinite_next',
        callback: callBack()
    });
})