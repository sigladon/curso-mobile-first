const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2");
let slider1Section = document.querySelectorAll(".table-div");
let slider2Section = document.querySelectorAll(".price");
slider1.value = 0;
slider2.value = 0;
const btnOff = "btnOff";
const slider1Btns = document.querySelectorAll(".slider1btn");

function sliderFn(slider,sliderElements,sliderButtons,direction) {
    const sliderLen = sliderElements.length;
    switch (slider.value) {
        case 0:
            sliderButtons[0].classList.toggle(btnOff);
            sliderButtons[1].classList.remove(btnOff);
            break;
        case sliderLen - 1:
            sliderButtons[1].classList.toggle(btnOff);
            sliderButtons[0].classList.remove(btnOff);
            break;
        default:
            sliderButtons[0].classList.remove(btnOff);
            sliderButtons[1].classList.remove(btnOff);
            break;
    }
    if (slider.value >= 0 && slider.value <= sliderLen -1) {
        slider.value = slider.value + direction;
        const margin = slider.value * 100;
        slider.style.marginLeft = `-${margin}%`;
    }
}

slider1Btns[1].addEventListener('click', function(){
    const right = -1;
    sliderFn(slider1,slider1Section,slider1Btns,right);
});

slider1Btns[0].addEventListener('click', function(){
    const left = 1;
    sliderFn(slider1,slider1Section,slider1Btns,left);
});
