new Swiper('.crd',{
    //стрелки
   slidesPerView: '4',
   spaceBetween: 30,   
   keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
   },

   loop: true ,


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
           slidesPerView: 1.25,
           spaceBetween: 35, 
           
       },


       450: {
           slidesPerView: 1.5,
       },


       600: {
        slidesPerView: 1.9,
       },







       768: {
        slidesPerView: 1.8,
       },

       800: {
        slidesPerView: 2.15,
       },


       900: {
        slidesPerView: 2.3,
       },

       
       1024: {
           slidesPerView: 2.5,
           
       },
       1140: {
           slidesPerView: 3,
           
       },


      1500: {
           slidesPerView: 4,
       }, 

       


       
   },

});


/*  */

document.querySelector('#open-one').onclick = function(){
    document.querySelector('.navigation-menu').classList.add('open');
}

document.querySelector('.menu-close').onclick = function(){
    document.querySelector('.navigation-menu').classList.remove('open');
}

document.querySelector('#close-two').onclick = function(){
    document.querySelector('.navigation-menu').classList.remove('open');
}

document.querySelector('#open-two').onclick = function(){
    document.querySelector('.navigation-menu').classList.add('open');
}

/*  */


let header = document.querySelector('.js-header');

     headerH = document.querySelector('.js-header').clientHeight;


document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH  ) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    }  else {

        header.classList.remove('fixed');
        document.body.removeAttribute('style');

    }
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
        slidesPerView: 1.3,

        spaceBetween: 20,
       },

    


     400: {
        slidesPerView: 1.3,

        spaceBetween: 20,
       },

       590: {
        slidesPerView: 1.4,

        spaceBetween: 20,
       },
       732: {
        slidesPerView: 1.3,
        spaceBetween: 40,
       },
       1001: {
        slidesPerView: 1.5, 
        spaceBetween: 40, 
       },

        1160: {
           slidesPerView: 1.4,

       },

         1380: {
           slidesPerView: 1.6,

       },

        1550: {
           slidesPerView: 1.5,
       },

       1800: {
           slidesPerView: 1.7,
       },
       
   },

});
