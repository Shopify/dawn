


const createStylesheet =  async () => {
   await  fetch('https://sea-turtle-app-cr2ki.ondigitalocean.app/blend/get-all').then(response => response.json())
    .then(data => {
        let stylesheet = document.querySelector(`#bar-colors`);
        let styles = ``;
      
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            let style = `
                [data-name="${item.title}"] {
                    background-color: ${item.circleColour};
                }
            `;
            styles += style;
        }

        stylesheet.innerHTML = styles;
        Window.data = data;
    })

    let bars = document.querySelectorAll('.progress-bar-inner');
    let arr = []
    bars.forEach(bar => {
        let width = bar.style.width;
        let name = bar.getAttribute('data-name');
        let obj = {
            name: name,
            width: width.replace('%', ''),
            data: Window.data.find(item => item.title === name)
        }
        arr.push(obj)
    })

    let barWithHighestWidth = getBarWithHighestWidth(arr);
    let detailsImage = document.querySelector('.gallery-details__image');

    detailsImage.style.backgroundImage = `url(${barWithHighestWidth.data.image})`;
    // add to stylesheet
    let stylesheet = document.querySelector(`#bar-colors`);

    let style = `
        span.decorative:after {
            background-color: ${barWithHighestWidth.data.circleColour};
        }
    `;

    stylesheet.innerHTML += style;

}

const getBarWithHighestWidth = (arr) => {
    let highest = 0;
    let item = '';
  
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        if (obj.width > highest) {
            highest = obj.width;
            item = obj;
        }
    }
    return item;
}

// listen to any changes to radio buttons inside of first .max class


const attachEventListeners = () => {
    const radioButtons = document.querySelectorAll('.max input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            let variant = getVariantFromSelectedOptions();
            let subtotal = document.querySelector(`.subtotal-of-items`);
            let quantity = document.querySelector(`.quantity`).querySelector('input').value;
            subtotal.innerHTML = `£${((variant.price / 100) * quantity).toFixed(2)}`; 
        })
    })
}

const getVariantFromSelectedOptions = () => {
    let radios = document.querySelectorAll('.max input[type="radio"]');
    let checked = Array.from(radios).filter(radio => radio.checked);
    let selectedOptions = checked.map(radio => radio.value);
    let variant = Window.product.variants.find(variant => {
        return variant.options.every((option, i) => option === selectedOptions[i]);
    });
    return variant;
}

const addQuantityListeners = () => {

    let remove = document.querySelector('.remove-quantity');
    let add = document.querySelector('.add-quantity');

    remove.addEventListener('click', function() {
        let quantity = document.querySelector('.quantity').querySelector('input');
        let value = parseInt(quantity.value);
        if (value > 1) {
            quantity.value = value - 1;

            let variant = getVariantFromSelectedOptions();
            let subtotal = document.querySelector(`.subtotal-of-items`);
            subtotal.innerHTML = `£${((variant.price / 100) * (quantity.value)).toFixed(2)}`;
        }

    })

    add.addEventListener('click', function() {
        let quantity = document.querySelector('.quantity').querySelector('input');
        let value = parseInt(quantity.value);
        quantity.value = value + 1;

        let variant = getVariantFromSelectedOptions();
        let subtotal = document.querySelector(`.subtotal-of-items`);
        subtotal.innerHTML = `£${((variant.price / 100) * (quantity.value)).toFixed(2)}`;
    })

}

const addProductToCart = async () => {
    let atc_button = document.querySelector('.atc');

    atc_button.addEventListener('click', async function() {
        let variant = getVariantFromSelectedOptions();
        let quantity = document.querySelector('.quantity').querySelector('input').value;
        let data = {
            items: [
                {
                    id: variant.id,
                    quantity: parseInt(quantity)
                }
            ]
        }

        await fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => {
            atc_button.innerHTML = 'Adding to cart...';
            window.location.href = '/cart';
        });
    });
    
}

document.addEventListener('DOMContentLoaded', function() {
    fetch(location.href + ".js").then(response => response.json()).then(data => {
        Window.product = data;
    });
    

    createStylesheet()
    attachEventListeners()
    addQuantityListeners();
    addProductToCart();
});