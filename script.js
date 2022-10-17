const menuBtn = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.links__top');
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle("active")
})

new Swiper(".slider",{
    navigation:{
        nextEl:".messages__bottom",
        prevEl:".newblock__bottom"
    }
})