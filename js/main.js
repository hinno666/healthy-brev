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
const cards = document.querySelectorAll(".dishes__card");

cards.forEach((card) => {
  const stars = card.querySelectorAll(".star");
  const ratingElement = card.querySelector(".rating");
  let selectedValue = parseInt(ratingElement.getAttribute("data-rating"));

  stars.forEach((star) => {
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
});
