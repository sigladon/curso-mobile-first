const slider1 = document.querySelector("#slider1");
let slider1Section = document.querySelectorAll(".table-div");
slider1.value = 0;
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


const slider2 = document.querySelector("#slider2");
let slider2Section = document.querySelectorAll(".price");
let slider2SectionLast = slider2Section[slider2Section.length -1];
const slider2Btns = document.querySelectorAll(".slider2btn");

slider2.insertAdjacentElement('afterbegin', slider2SectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".price")[0];
    slider2.style.marginLeft = "-230px";
    slider2.style.transition = "all 0.3s";
    setTimeout(() => {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider2.style.marginLeft = "0";
    }, 300);
}

function prev() {
    let slider2Section = document.querySelectorAll(".price");
    let slider2SectionLast = slider2Section[slider2Section.length -1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.3s";
    setTimeout(() => {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin', slider2SectionLast);
        slider2.style.marginLeft = "-230px";
    }, 300);
}

slider2Btns[0].addEventListener('click', function() {
    next();
});

slider2Btns[1].addEventListener('click', function() {
    prev();
});
