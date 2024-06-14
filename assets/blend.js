Window.values = {}

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

const addValue = (name) => {

    if(totalValue() != 20){

        if(Window.values[name]){
            Window.values[name]++;
        }else{
            Window.values[name] = 1;
        }

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
  
    console.log(getWeightedColor(colors))
    document.querySelector('.bottom-layer').style.background = `${getWeightedColor(colors)}`;
    document.querySelector('.bottom-layer').style.height = `Calc(${(totalValue() * 3.5)}%)`;

    if(totalValue() == 20){
        document.querySelector('.label-layer').style.display = 'block';
        document.querySelector('.cap-layer').style.display = 'block';
    }else{
        document.querySelector('.label-layer').style.display = 'none';
        document.querySelector('.cap-layer').style.display = 'none';
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

    combineColors()
}


const handleBlendName = (e) => {
    console.log("changing");
    let name = e.value;
    console.log("name, ", name);
    document.querySelector('.text').innerHTML = name;

}

window.addEventListener('DOMContentLoaded', () => {
    changeFlavour(1);
});