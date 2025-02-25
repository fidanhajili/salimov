import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const salimovSlider = {
  portfolio: {
    loop: true,
    navigation: {
      nextEl: ".next-item",
      prevEl: ".prev-item",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: false,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 0,
      },
      1025: {
        direction: "vertical",
      },
    },
  },
  clients: {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  },
  portfolioItems: {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  },
  testimonials: {
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 2,
      },
    },
    autoplay: {
      delay: 0, // Duraksamayı tamamen kaldırıyoruz
      disableOnInteraction: false,
    },
    speed: 1500, // Daha hızlı kayma için değeri düşürdüm
    spaceBetween: 40,
    grabCursor: true,
    freeMode: {
      enabled: true, // Serbest kayma modu
      momentum: true, // Akıcı geçiş sağlar
      momentumRatio: 0.5, // Daha doğal kayma için oran belirlenir
    },
  },
  
  portfolioItems: {
    slidesPerView: "auto", // Görsellerin daha akıcı geçmesini sağlıyor
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    autoplay: {
      delay: 0, 
      disableOnInteraction: false,
    },
    speed: 3000, 
  },
  
};

