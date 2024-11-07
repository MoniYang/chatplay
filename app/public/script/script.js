  let swiper = new Swiper(".mySwiper", {
      pagination: {
          el: ".swiper-pagination",
      },
    });


  let PromoGameSwiper = new Swiper(".promoGame", {
    slidesPerView: 'auto',
  });


  function toggleDropdown(button) {
    const dropdown = button.closest('[data-component="dropdown"]');
    const isOpen = dropdown.getAttribute('data-open') === 'true';
    dropdown.setAttribute('data-open', !isOpen);
  }

  function sideMenuOpen() {
    const sideMenu = document.querySelector('.side-menu');
    
    // 檢查目前的 data-open 屬性值
    const isOpen = sideMenu.getAttribute('data-open') === 'true';
    
    // 切換 data-open 屬性
    sideMenu.setAttribute('data-open', !isOpen);
}

function prodiverOpen() {
  const provider = document.querySelector('.provider');
  
   // 強制設定 data-open 屬性為 'true'，只管開
   provider.setAttribute('data-open', 'true');
}

function prodiverclose() {
  
  const provider = document.querySelector('.provider');
  provider.setAttribute('data-open', 'false');
}

function profileEvent() {
  const profile = document.querySelector('.profile');
  
  // 檢查目前的 data-open 屬性值
  const isOpen = profile.getAttribute('data-open') === 'true';
  
  // 切換 data-open 屬性
  profile.setAttribute('data-open', !isOpen);
}

function promoEvent() {
  const promo = document.querySelector('.promo');
  
  // 檢查目前的 data-open 屬性值
  const isOpen = promo.getAttribute('data-open') === 'true';
  
  // 切換 data-open 屬性
  promo.setAttribute('data-open', !isOpen);
}