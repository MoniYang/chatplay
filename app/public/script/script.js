var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
  });


  var PromoGameSwiper = new Swiper(".promoGame", {
    slidesPerView: 'auto',
  });


  function toggleDropdown(button) {
    const dropdown = button.closest('[data-component="dropdown"]');
    const isOpen = dropdown.getAttribute('data-open') === 'true';
    dropdown.setAttribute('data-open', !isOpen);
  }