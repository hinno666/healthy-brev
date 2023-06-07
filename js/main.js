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

//--------------------------------------------------------------------------------------------------//

/*POPUP VANILA JS FUNCTIONAL*/
let openPopup = document.querySelectorAll('.button');
let closePopup = document.querySelector('.modal__form-close');
let popup = document.querySelector('.modal__form-shadow');



function open() {
  popup.classList.add('open__popup');

}
function close() {
  popup.classList.remove('open__popup')
}

openPopup.forEach((btn) => {
  btn.addEventListener("click", open);

});
closePopup.addEventListener('click', close);


window.addEventListener('click', (e) => {
    if(e.target === popup) {
        close();
    }
});

//--------------------------------------------------------------------------------------------------//

//STARS VANILA JS FUNCTIONAL
const cards = document.querySelectorAll(".dishes__card");

cards.forEach((card) => {
  const stars = card.querySelectorAll(".star");
  const ratingElement = card.querySelector(".rating");
  let selectedValue = parseInt(ratingElement.getAttribute("data-rating"));

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      const hoverValue = parseInt(star.getAttribute("data-value"));

      stars.forEach((star, index) => {
        star.classList.toggle("selected", index < hoverValue);
      });
    });

    star.addEventListener("click", () => {
      const clickedValue = parseInt(star.getAttribute("data-value"));

      selectedValue = clickedValue;
      ratingElement.setAttribute("data-rating", selectedValue);

      stars.forEach((star, index) => {
        star.classList.toggle("selected", index < selectedValue);
      });
    });
  });

  stars.forEach((star, index) => {
    star.classList.toggle("selected", index < selectedValue);
  });
});

//--------------------------------------------------------------------------------------------------//

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000); // Adjust the duration (in milliseconds) as needed
    }
  });
});