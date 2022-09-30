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

/*  */

new Swiper('.cards',{
    //стрелки

     mousewheel: {
        sensitivity: 10,
        //класс объекта на котором будет отрабатываться
       /*  eventsTarget: ".image-slider"   */ 
    }, 

    // включение и отключение
    // перетаскивания на pc
    simulateTouch: false,
    //чувствительность свайпа
    touchRatio: 0.5,
    //угол срабатывания свайпа
    touchAngle: 45,
    //курсор перетаскиваня
    grabCursor: true,
    //переключение на слайд при клике на него
    slideToClickedSlide: true,

    //управление клаваой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    spaceBetween: 30,

    //управление мышью
  

    //кол-во слайдов для показа 
    slidesPerView: '1',

    //speed
    speed: 800,

     //vertical
    direction: 'vertical', 

    effect: "cards",
    cardsEffect: {
        perSlideOffset: 10 , 

        perSlideRotate: 0,
/*         rotate:false, */
       /*  slideShadows:false ,  */
      },


    //адаптивность
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        }
    },

    
});

/* 1 */


document.querySelector('#plus1').onclick = function(){
    document.querySelector('#info1').classList.toggle('answer-hide');
    document.querySelector('#plus1').classList.toggle('close');
    document.querySelector('#colorh').classList.toggle('color');
}

/* 2 */
document.querySelector('#plus2').onclick = function(){
    document.querySelector('#info2').classList.toggle('answer-hide');
    document.querySelector('#plus2').classList.toggle('close');
    document.querySelector('#colorh1').classList.toggle('color');
}

/* 3 */

document.querySelector('#plus3').onclick = function(){
    document.querySelector('#info3').classList.toggle('answer-hide');
    document.querySelector('#plus3').classList.toggle('close');
    document.querySelector('#colorh2').classList.toggle('color');
}

/* 4 */

document.querySelector('#plus4').onclick = function(){
    document.querySelector('#info4').classList.toggle('answer-hide');
    document.querySelector('#plus4').classList.toggle('close');
    document.querySelector('#colorh3').classList.toggle('color');
}

/* 5 */

document.querySelector('#plus5').onclick = function(){
    document.querySelector('#info5').classList.toggle('answer-hide');
    document.querySelector('#plus5').classList.toggle('close');
    document.querySelector('#colorh4').classList.toggle('color');
}

/* 6 */

document.querySelector('#plus6').onclick = function(){
    document.querySelector('#info6').classList.toggle('answer-hide');
    document.querySelector('#plus6').classList.toggle('close');
    document.querySelector('#colorh5').classList.toggle('color');
}