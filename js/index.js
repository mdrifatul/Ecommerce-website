const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");//also use for fix navigation
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

const navleft = nav.getBoundingClientRect().left;

openBtn.addEventListener("click",() =>{
  if(navleft < 0){
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
  }
});

closeBtn.addEventListener("click",() =>{
  if(navleft < 0){
    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  }
});

// Fix navigation

// const navHeight = navigation.getBoundingClientRect().height;
// window.addEventListener("scroll", () => {
//   if (window.scrollY > navHeight) {
//     navigation.classList.add("sticky");
//   } else {
//     navigation.classList.remove("sticky");
//   }
// });

window.addEventListener("scroll", () =>{
  navigation.classList.toggle("sticky", window.scrollY > 6);
})


//PopUp

const popup = document.querySelector(".popup");

const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("load", ()=>{
  setTimeout( () => {
    popup.classList.add("show")
  }, 5000);
})

