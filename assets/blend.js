Window.values = {}

Window.bottleData = {
    type: 'Whiskey',
    capacity: '20CL',
    name: '',
    units: convertUnits(Window.values),
    author: ''
};

const changeFlavour = (flavour) => {
    let blendDots = document.querySelectorAll('.blend-dot');
    // remove all active classes
    blendDots.forEach(dot => {
        dot.classList.remove('active');
    });

    Window.activeFlavour = Window.data[Number(flavour) - 1];
    Window.activeStep = Number(flavour) - 1;
    // add active class to selected
    blendDots[Number(flavour) - 1].classList.add('active');

    
    let flavours = document.querySelector('.flavours');

    // hide all flavours
    document.querySelectorAll('.flavour-container').forEach(flavour => {
        flavour.style.display = 'none';
    });

    // show selected flavour
    document.querySelector(`.flavour-container-${flavour}`).style.display = 'block';

}

const stepFlavour = (step) => {
    if(step == "+"){
        if(Window.activeStep < Window.data.length - 1){
            Window.activeStep++;
            changeFlavour(Window.activeStep + 1);
        }else{
            Window.activeStep = 0;
            changeFlavour(Window.activeStep + 1);
        }
    }else{
        if(Window.activeStep > 0){
            Window.activeStep--;
            changeFlavour(Window.activeStep + 1);
        }else{
            Window.activeStep = Window.data.length - 1;
            changeFlavour(Window.activeStep + 1);
        }
    }
}

function convertUnits(unitsObject) {
    const unitsArray = Object.entries(unitsObject).map(([key, value]) => ({ [key]: value }));
    return unitsArray;
}

const addValue = (name) => {

    let total = totalValue();

    let controls = document.querySelector(`[data-controls="${name}"]`);

    if(total != 20){

        if(Window.values[name]){
            Window.values[name]++;
        }else{
            Window.values[name] = 1;
        }

    }

    total = totalValue();

    if(total == 20){
        if(controls.firstElementChild.classList.contains('valid')){
            controls.firstElementChild.classList.remove('valid');
        }
        
    }else if(total < 20){
        if(!controls.firstElementChild.classList.contains('valid')){
            controls.firstElementChild.classList.add('valid');
        }
    }


    if(!controls.lastElementChild.lastElementChild.classList.contains('valid')){
        controls.lastElementChild.lastElementChild.classList.add('valid');
    }


    document.querySelector(`[name="${name}"]`).innerHTML = Window.values[name] + "cl";

    combineColors()
}

const combineColors = () => {
    let data = Window.data;

    let colors = []

    // full bottle is 20cl so its divided by 20
    for (const key in Window.values) {
        // console.log(key, Window.values[key]);
        let flavour = data.find(flavour => flavour.title == key);
        let colorHex = flavour.blendColour;
        // convert Window.values[name] to percentage of 20
        let percentage = (Window.values[key] / 20) * 100;
        colors.push({colorHex, percentage});
    }
  
    document.querySelectorAll('.bottom-layer').forEach(layer => {
        layer.style.background = `${getWeightedColor(colors)}`;
        layer.style.height = `Calc(${(totalValue() * 3.5)}%)`;
    });

    if(totalValue() == 20){
        document.querySelectorAll('.label-layer').forEach(label => {
            label.style.display = 'block';
        });
        document.querySelectorAll('.cap-layer').forEach(cap => {
            cap.style.display = 'block';
        });
    }else{
        document.querySelectorAll('.label-layer').forEach(label => {
            label.style.display = 'none';
        });
        document.querySelectorAll('.cap-layer').forEach(cap => {
            cap.style.display = 'none';
        });
    }
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
  
    return [r, g, b];
  }
  
function rgbToHex(r, g, b) {
return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()
);
}
  
function getWeightedColor(colors) {
let totalPercentage = 0;
let weightedRgb = [0, 0, 0];

colors.forEach(color => {
    totalPercentage += color.percentage;
});

colors.forEach(color => {
    let weight = color.percentage / totalPercentage;
    let [r, g, b] = hexToRgb(color.colorHex);

    weightedRgb[0] += r * weight;
    weightedRgb[1] += g * weight;
    weightedRgb[2] += b * weight;
});

return rgbToHex(
    Math.round(weightedRgb[0]),
    Math.round(weightedRgb[1]),
    Math.round(weightedRgb[2])
);
}

const totalValue = () => {
    let total = 0;
    for (const key in Window.values) {
        total += Window.values[key];
    }

    checkIfReady(total);

    return total;
}

const decreaseValue = (value) => {

    if(Window.values[value]){
        if(Window.values[value] > 0){
            Window.values[value]--;
        }
    }else{
        Window.values[value] = 0;
    }

    document.querySelector(`[name="${value}"]`).innerHTML = Window.values[value] + "cl";


    let controls = document.querySelector(`[data-controls="${value}"]`);

    if(Window.values[value] == 0){
        if(controls.lastElementChild.lastElementChild.classList.contains('valid')){
            controls.lastElementChild.lastElementChild.classList.remove('valid');
        }

    }else{
        if(!controls.firstElementChild.classList.contains('valid')){
            controls.firstElementChild.classList.add('valid');
        }
    }

    combineColors()
}

const checkIfReady = (total) => {
    let totalValue = total == 20 ? true : false;
    let hasBrand = Window.bottleData.name.length > 0 ? true : false;
    let hasAuthor = Window.bottleData.author.length > 0 ? true : false;

    if(totalValue && hasBrand && hasAuthor){
        document.querySelector('.blend-button-text').removeAttribute('disabled');
    }else{

        document.querySelector('.blend-button-text').setAttribute('disabled', true);
    }

}

const handleBlendName = (e) => {
    let name = e.value;
    document.querySelectorAll('.text').forEach(text => {
        text.innerHTML = name;
    });

    Window.bottleData.name = name;

    checkIfReady(totalValue());

}

const handleBlendAuthor = (e) => {
    let author = e.value;
    Window.bottleData.author = author;

    checkIfReady(totalValue());
}

async function createWhiskeyProduct() {
    let url = "https://sea-turtle-app-cr2ki.ondigitalocean.app/whiskey/create";

    const productData = Window.bottleData

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error creating product:', errorData);
            return;
        }

        const data = await response.json();

        window.location.href = `/products/${data.responseData.product.handle}`;
    } catch (error) {
        console.error('Error creating product:', error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    changeFlavour(1);

    document.querySelector(`.blend-button`).addEventListener('click', async () => {
        Window.bottleData.units = convertUnits(Window.values);
        await createWhiskeyProduct();
    });
});