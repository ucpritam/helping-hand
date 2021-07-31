function initParadoxWay() {
  "use strict";

  if ($(".fund-cards-carousel").length > 0) {
    var j2 = new Swiper(".fund-cards-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  setInterval(function () {
    var size = 1;
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        1 +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

$(document).ready(function () {
  initParadoxWay();
});

$(".denomination").click(function (event) {
  $(".denomination").removeClass("selected").prop("checked", false);
  $(".denomination-other input").removeClass("selected").val("");
  $(this).addClass("selected");
  $(this).children(":first").prop("checked", true);
  $("#d-button").text("Donate ₹" + $(this).children(":first").val());
});

$(".denomination-other input").on("keypress", function (event) {
  var regex = new RegExp("^[0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }

  $(".denomination").removeClass("selected").prop("checked", false);
  $(this).addClass("selected");
  $("#d-button").text("Donate ₹" + $(this).val() + key);
});
