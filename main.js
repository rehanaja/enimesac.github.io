function menuToggle() {
  const toggleMenu = document.querySelector(".toggle");
  const navbarNav = document.querySelector(".navbar-nav");
  toggleMenu.classList.toggle("active");
  navbarNav.classList.toggle("active");
}

// $(".nav-link").click(function () {
//   $(".navbar-nav").hide();
//   $(".this").removeClass("toggle");
// });

// Owl Carousel

$(".collection .owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
