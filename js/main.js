import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper();

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-list");
menuBtn.addEventListener("click", ()=> {
    console.log("click");
    
    menuList.classList.toggle("menu--open");
})

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
  });
  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        360: {
            slidesPerView: 2,
          //   spaceBetween: 20,
          },
        480: {
          slidesPerView: 3,
        //   spaceBetween: 20,
        },
 
        // 640: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   }
      }
    
  
  });

  const accordion = document.querySelector(".accordeon");
  if (accordion) {
    const accordionTitles = accordion.querySelectorAll(".accordeon__title");

    accordionTitles.forEach(accordionTitle => {
        accordionTitle.addEventListener("click", function () {
            const currentText = accordionTitle.nextElementSibling;

            // Перевіряємо, чи наступний елемент є .accordeon__text
            if (currentText && currentText.classList.contains('accordeon__text')) {

                if (currentText.style.maxHeight) {
                    // Якщо елемент відкритий, приховуємо його
                    currentText.style.maxHeight = null;
                } else {
                    // Якщо елемент прихований, відкриваємо його
                    currentText.style.maxHeight = currentText.scrollHeight + "px";
                }

                accordionTitle.classList.toggle('accordeon__title--active');
                currentText.classList.toggle('accordeon__text--active');
            }
        });
    });
}