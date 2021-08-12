const glide1 = document.getElementById("glide1");

if(glide1)
  new Glide(glide1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();

const glide2 = document.getElementById("glide2");
if(glide2)
  new Glide(glide2, {
    type: "carousel",
    startAt:0,
    autoplay:3000,
    hoverpause:true,
    perView:5,
    animationDuration:800,
    animationTimingFunc: "linear",
    breakpoints:{
      996:{
        perView: 4,
      },
      768:{
        perView:3,
      }
    }
  }).mount();


const glide3 = document.getElementById("glide3");

if(glide3)
  new Glide(glide3, {
    type:"carousel",
    startAt:0,
    perView: 3,
    rewin: false,
    autoplay:3000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints:{
      998:{
        perView:2,
      },
      768:{
        perView:1,
      },
    },
  }).mount();