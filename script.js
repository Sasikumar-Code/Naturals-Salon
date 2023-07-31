// slider1
const swiper = new Swiper('.swiper', {
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
});

// number change
let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));

        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 5;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }

            }, duration);
        });


let valueDisplays2 = document.querySelectorAll(".num2");
let interval2 = 3000;
        
valueDisplays2.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));

        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 4;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }

            }, duration);
        }); 


let valueDisplays3 = document.querySelectorAll(".num3");
let interval3 = 3000;

valueDisplays3.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));

        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 50;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }

            }, duration);
        });
        
// slider3
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 2){
    counter = 1;
  }
}, 3000);