const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next-img",
        prevEl: ".swiper-button-prev-img",
    },
});

// swiper-thumbnail-tour
const swiperTour = new Swiper(".swiper-thumbnail-tour", {
    spaceBetween: 10,
    slidesPerView: 4,
    scrollbar: {
        el: ".swiper-scrollbar-tour",
    },
});


// swiper-category-tour
const swiperCategory = new Swiper(".swiper-category-tour", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiper2 = new Swiper(".swiper-category-tour-two", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperCategory,
    },
    pagination: {
        el: ".swiper-pagination-category-tour",
    },
});

// swiper-visa
const swiperVisa = new Swiper(".swiper-visa", {
    spaceBetween: 10,
    slidesPerView: 6,

    scrollbar: {
        el: ".swiper-scrollbar-visa",
    },
});