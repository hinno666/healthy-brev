document.addEventListener('DOMContentLoaded', function() {
  let sections = document.querySelectorAll('section');

  function checkInView() {
    let windowHeight = window.innerHeight;

    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    }
  }

  checkInView();

  window.addEventListener('scroll', checkInView);
});

$(document).ready(function () {
  let menu = document.querySelector(".menu");
  let menuItems = document.querySelectorAll(".menu__item"); // Выбираем все пункты меню

  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(menu).toggleClass("open-menu");
    if (menu.classList.contains("open-menu")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });
  if (menu.classList.contains("open-menu")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  // Добавляем обработчик событий для пунктов меню
  $(menuItems).click(function () {
    $(".menu-burger__header").removeClass("open-menu");
    $(menu).removeClass("open-menu");
    if (menu.classList.contains("open-menu")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });

  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
    $('.flip').click(function(){
    $('.cont-flip').toggleClass('flipped');
    return false;
  });
});
//--------------------------------------------------------------------------------------------------//

/*POPUP VANILA JS FUNCTIONAL*/
let openPopup = document.querySelectorAll(".button");
let closePopup = document.querySelector(".modal__form-close");
let popup = document.querySelector(".modal__form-shadow");

function open() {
  popup.classList.add("open__popup");
}
function close() {
  popup.classList.remove("open__popup");
}

openPopup.forEach((btn) => {
  btn.addEventListener("click", open);
});
closePopup.addEventListener("click", close);

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    close();
  }
});

//--------------------------------------------------------------------------------------------------//

//STARS VANILA JS FUNCTIONAL
const ratingContainers = document.querySelectorAll('.rating');

ratingContainers.forEach((ratingContainer) => {
  const stars = ratingContainer.querySelectorAll('.star');
  let currentRating = 0;

  stars.forEach((star) => {
    star.addEventListener('mouseover', (e) => {
      fillStarsUpTo(stars, parseInt(e.target.getAttribute('data-value')));
    });

    star.addEventListener('mouseout', () => {
      fillStarsUpTo(stars, currentRating);
    });

    star.addEventListener('click', (e) => {
      currentRating = parseInt(e.target.getAttribute('data-value'));
      ratingContainer.setAttribute('data-rating', currentRating);
    });
  });

  window.addEventListener('load', () => {
    currentRating = parseInt(ratingContainer.getAttribute('data-rating'));
    fillStarsUpTo(stars, currentRating);
  });
});

function fillStarsUpTo(stars, value) {
  stars.forEach((star) => {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (starValue <= value) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}
//--------------------------------------------------------------------------------------------------//

$(document).ready(function () {
  $(".scroll__to-top").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > $("header").height()) {
      $(".scroll__to-top").fadeIn();
    } else {
      $(".scroll__to-top").fadeOut();
    }
  });
  
  $('a[href^="#"]').on("click", function (event) {
    let target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
  $('.input-at[name="phone-at"]').inputmask('+7 (999) 999-99-99');
});





