document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector(".theme-switcher");
  const body = document.body;

  // Theme switcher
  themeSwitcher.addEventListener("click", (e) => {
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");

    // Remove active class from both icons
    sunIcon.classList.remove("active");
    moonIcon.classList.remove("active");

    // Add active class to the clicked icon
    if (e.target.closest(".sun-icon")) {
      sunIcon.classList.add("active");
    }
    if (e.target.closest(".moon-icon")) {
      moonIcon.classList.add("active");
    }
  });

  // Offers carousel
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  // Burger menu for mobile header
  const burgerMenu = document.querySelector('.burger-menu');
  const headerContent = document.querySelector('.header-content');
  const dropdowns = document.querySelectorAll('.dropdown');

  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      headerContent.classList.toggle('active');
  });

  dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.nav-link');
      link.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('active');
      });
  });
});
