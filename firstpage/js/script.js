document.querySelector('.menu__icon').onclick = function(){
    document.querySelector('.navigation-menu').classList.add('sekk');
}


/*  */

document.querySelector('.menuuu').onclick = function(){
    document.querySelector('.navigation-menu').classList.add('dott');
    document.querySelector('.navigation-menu').classList.remove('sekk'); 
}
/*  */

document.querySelector('.icon-two').onclick = function(){
    document.querySelector('.navigation-menu').classList.add('sekk');
}

/*  */

document.querySelector('.first-close').onclick = function(){
    document.querySelector('.navigation-menu').classList.add('dott');
    document.querySelector('.navigation-menu').classList.remove('sekk'); 
}

/*  */

new Swiper('.mygg',{
    //стрелки
    navigation: {
       nextEl:'.swiper-button-next',
       prevEl:'.swiper-button-prev'

   },
   slidesPerView: '1.3',
   loop: true,
    spaceBetween: 80,   
   centeredSlides: true,
   keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
   },

   scrollbar: {
       el: '.swiper-scrollbar',
       //возможность пертаскивать скрол
       draggable: true
   },

 /*   mousewheel: {
       sensitivity: 1,
       //класс объекта на котором будет отрабатываться
      /*  eventsTarget: ".image-slider"  */ 



       




    //автопрокрутка
    autoplay: {
        //пауза между прокруткой
        delay: 2000,
        //закончить на последнем слайдк
        stopOnLastSlide: true,
        //откл после ручного переключениея
        disableOnInteraction: false,
        reverseDirection: true
    },


   breakpoints: {
       320: {
        slidesPerView: 1.19,
       },
       480: {
        slidesPerView: 1.19,
       },
       992: {
        slidesPerView: 1.19,
        spaceBetween: 0,    
       },

       1300: {
           slidesPerView: 1.45,
       },


       1920: {
        slidesPerView: 1.45,
       }
       
   },

});


/*  */

new Swiper('.crd',{
    //стрелки
   slidesPerView: '4',
   spaceBetween: 30,   
   keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
   },

  /*  scrollbar: {
       el: '.swiper-scrollbar',
       //возможность пертаскивать скрол
       draggable: true
   },

   mousewheel: {
       sensitivity: 1,
       //класс объекта на котором будет отрабатываться
      /*  eventsTarget: ".image-slider"  



       
   }, */


   pagination: {
    el: '.swiper-pagination',

    clickable: true,
   /*  //булеты
    clickable: true,
    // динамические булеты
    dynamicBullets: true,
    //кастомные булеты
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }, */
    //фракция
    /* type: 'fraction', */
    // кастомный вывод фракции
   /*  renderFraction: function (currentClass, totalClass) {
        return 'Photo <span class="' + currentClass + '"></span>' +
        ' iz ' +
        '<span class="' + totalClass + '"></span>';
    }, */
    /* //progrssbar
    type: 'progressbar' */
 }, 


   breakpoints: {
       320: {
           slidesPerView: 1,
       },
       768: {
           slidesPerView: 2,
       },
       1140: {
           slidesPerView: 3,
       },


      1440: {
           slidesPerView: 4,
       }, 

       


       
   },

});

