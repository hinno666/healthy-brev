/*BURGER MENU && SLICK-SLIDER jQuery CODE*/

$(document).ready(function () {
  let menu = document.querySelector('.menu');
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(menu).toggleClass("open-menu");
    if(menu.classList.contains("open-menu")) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "visible";
    }
  });
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});



/*POPUP VANILA JS FUNCTIONAL*/
let openPopup = document.querySelector('.header__button');
let closePopup = document.querySelector('.modal__form-close');
let popup = document.querySelector('.modal__form-shadow');



function open() {
  popup.classList.add('open__popup');

}
function close() {
  popup.classList.remove('open__popup')
}

openPopup.addEventListener('click', open);
closePopup.addEventListener('click', close);


window.addEventListener('click', (e) => {
    if(e.target === popup) {
        close();
    }
});











/** RAITING FUNCTIONAL*/

// const raintingItemsList = document.querySelectorAll(".dishes__raiting-item");


// raintingItemsList.forEach((item) => {
//   item.addEventListener("click", () => {
//     const counter = item.dataset.itemValue;
//     item.parentNode.dataset.totalValue = counter;
//     const counterElement = item.parentNode.parentNode.lastElementChild;
//     console.log(counterElement);
//     counterElement.innerText = counter;
//   });
// });