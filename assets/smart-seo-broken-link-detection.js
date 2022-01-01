(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/apps/smart-seo/brokenLinks/add?page_url=' + window.location.pathname);

    xhr.onload = function () {
        if (xhr.status === 200) {            
        } else {
        }
    };

    xhr.send();
})();