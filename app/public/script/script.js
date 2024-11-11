  

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
   const allElements = document.querySelectorAll('[data-open]');
   allElements.forEach((el) => {
     if (!el.classList.contains('provider')) {
       el.setAttribute('data-open', 'false');
     }
   });

  // Set `data-open` to 'true' for the `.provider` element
  const provider = document.querySelector('.provider');
  if (provider) {
    provider.setAttribute('data-open', 'true');
  }
}
function homeEvent() {
  
  const allElements = document.querySelectorAll('[data-open]');
  allElements.forEach((el) => {
    if (!el.classList.contains('provider')) {
      el.setAttribute('data-open', 'false');
    }
  });
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

function walletEvent() {
  const wallet = document.querySelector('.wallet');
  
  // 檢查目前的 data-open 屬性值
  const isOpen = wallet.getAttribute('data-open') === 'true';
  
  // 切換 data-open 屬性
  wallet.setAttribute('data-open', !isOpen);
}

const deposit = document.querySelector('[data-page="deposit"]');
const withdraw = document.querySelector('[data-page="withdraw"]');
const withdrawButton = document.querySelector('[onclick="withdrawEvent(this)"]'); // Select withdraw button
const depositButton = document.querySelector('[onclick="depositEvent(this)"]'); // Select deposit button
deposit.setAttribute('data-open', true);
depositButton.setAttribute('data-selected', true);
function depositEvent(button) {


 
  // Toggle `data-open` attribute values
  const isOpen = deposit.getAttribute('data-open') === 'true';
  deposit.setAttribute('data-open', !isOpen);
  withdraw.setAttribute('data-open', isOpen);

 // Set the `data-selected` attribute on the deposit button and clear it on the withdraw button
 button.setAttribute('data-selected', true);
 withdrawButton.setAttribute('data-selected', false);

}

function withdrawEvent(button) {
  const deposit = document.querySelector('[data-page="deposit"]');
  const withdraw = document.querySelector('[data-page="withdraw"]');

  // Toggle `data-open` attribute values
  const isOpen = withdraw.getAttribute('data-open') === 'true';
  deposit.setAttribute('data-open', isOpen);
  withdraw.setAttribute('data-open', !isOpen);

 // Set the `data-selected` attribute on the withdraw button and clear it on the deposit button
 button.setAttribute('data-selected', true);
 depositButton.setAttribute('data-selected', false);

}

