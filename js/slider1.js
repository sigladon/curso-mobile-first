const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2");
let slider1Section = document.querySelectorAll(".table-div");
let slider2Section = document.querySelectorAll(".price");
var slider1Counter = 0;
const btnOff = "btnOff";

const btn1Right = document.querySelector("#slider1NextBtn");
const btn1Left = document.querySelector("#slider1PreviousBtn");

function btnChecker(counter,last,lBtn,rBtn) {
    switch (counter) {
        case 0:
            lBtn.classList.toggle(btnOff);
            rBtn.classList.remove(btnOff);
            break;
        case last:
            lBtn.classList.remove(btnOff);
            rBtn.classList.toggle(btnOff);
            break;

        default:
            lBtn.classList.remove(btnOff);
            rBtn.classList.remove(btnOff);
            break;
    }
}

function btnFn(dir,slide,sliderCtn,btn) {
    const sliderLen =  sliderCtn.length;
    switch (dir) {
        case "left":
            if (counter > 0) {
                counter--;
                const margin = counter * 100
                slide.style.marginLeft = `-${margin}%`;
                btn.classList.remove(btnOff);
            } else {
                btn.classList.toggle(btnOff);
            }
            break;
            
        case "right":
            if (counter < sliderLen) {
                counter++;
                const margin = counter * 100
                slide.style.marginLeft = `-${margin}%`;
                btn.classList.toffle(btnOff);
            } else {
                btn.classList.toggle(btnOff);
            }
            break;

        default:
            break;
    }
}


btn1Right.addEventListener('click', function(){
    btnFn("right",slider1,slider1Counter,btn1Right);
});

btn1Left.addEventListener('click', function(){
    btnFn("left",slider1,slider1Counter,btn1Left);
});
