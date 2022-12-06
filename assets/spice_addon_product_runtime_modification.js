function resizeAddonProductImages() {
    let productImages = $(".spice-spa-addon-product-image>img");
    productImages.each(function(_, img) {
        let newSrc = img.src.replace(/(?<=_)[\d]{2,3}(?=x)/, "240");
        $(img).attr("src", newSrc);
    });
}

function replaceQuantityInputs(quantityInputs) {
    quantityInputs.each(function(index, element) {
        let elementObj = $(element);
        let prevSibling = elementObj.prev();
        elementObj.remove();
        elementObj.addClass("quantity__input");
        elementObj.removeClass("spice-spa-addon-input-field");
        elementObj.css("padding", "0");
        elementObj.css("margin", "0");
        elementObj.css("border", "none");

        let quantityInput = $.parseHTML(
        `<quantity-input class="quantity">
            <button class="quantity__button no-js-hidden" name="minus" type="button">
                <span class="visually-hidden">Decrease quantity</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor"></path>
                </svg>
            </button>

            ${elementObj[0].outerHTML}

            <button class="quantity__button no-js-hidden" name="plus" type="button">
                <span class="visually-hidden">Increase quantity</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" fill="none" viewBox="0 0 10 10">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor"></path>
                </svg>
            </button>
        </quantity-input>`);
        prevSibling.after(quantityInput);
    });
}

let updateAddonProductQuantityRetryCount = 0;
myInterval = setInterval(
    function() {
        updateAddonProductQuantityRetryCount++;
        let quantityInputs = $(".spice-spa-addon-product-quantity");

        if (quantityInputs.length == 0) {
            if (updateAddonProductQuantityRetryCount > 10) {
                clearInterval(myInterval);
            }
            
            return;    
        }

        clearInterval(myInterval);

        replaceQuantityInputs(quantityInputs);
        resizeAddonProductImages();
    }, 300);