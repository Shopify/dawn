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


window.addEventListener('DOMContentLoaded', () => {
    changeFlavour(1);
});