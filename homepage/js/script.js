

/*  */
new Swiper('.crd',{
    //стрелки
   slidesPerView: '4',
   spaceBetween:  30,   
   keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
   },

   loop: true ,

     //чувствительность свайпа
     touchRatio: 1,
     //угол срабатывания свайпа
     touchAngle: 90,


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
           slidesPerView: 1.19,
           spaceBetween: 10, 
           
       },

       407 : {
           slidesPerView: 1.3,

            
           
           
       },


       488: {
           slidesPerView: 1.5,
       },


       600: {
        slidesPerView: 1.8,
       },




       646: {
        slidesPerView: 2,
       },




       710: {
        slidesPerView: 2.2,
       },







       768: {
        slidesPerView: 2.15,
       },

       822: {
        slidesPerView: 2.3,
       },

       902: {
        slidesPerView: 2.5,
       },

       1012: {
        slidesPerView: 2.8,
        spaceBetween: 30,
       },


       1100: {
        slidesPerView: 3,
        spaceBetween: 30,
       },

       
       1250: {
           slidesPerView: 3.2,
           spaceBetween:  30,
           
       },
       1400: {
           slidesPerView: 3.3,
           spaceBetween:  0, 
           
       },


      1500: {
           slidesPerView: 4,
       }, 

       


       
   },

});


/*  */

/* document.querySelector('.menu-two').onclick = function(){
    document.querySelector('.navigation-menu-two').classList.add('activetwo');
}

document.querySelector('.close-active').onclick = function(){
    document.querySelector('.navigation-menu-two').classList.remove('activetwo');
}

  document.querySelector('#close-two').onclick = function(){
    document.querySelector('.navigation-menu-two').classList.remove('activetwo');
} */

/* document.querySelector('#open-two').onclick = function(){
    document.querySelector('.menu-what').classList.add('open-what');
}   */

/*  */


let header = document.querySelector('.js-header');

     headerH = document.querySelector('.js-header').clientHeight;

     headertwo = document.querySelector('.js-header-two');

     headerHH = document.querySelector('.js-header-two').clientHeight;

    
document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH  ) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    }  else {

        header.classList.remove('fixed');
        document.body.removeAttribute('style');

    }


    if (scroll > headerH + 1450 ) {
        header.classList.add('header-white');
        document.body.style.paddingTop = headerH + 'px';
    } else  {

        header.classList.remove('header-white');
        document.body.removeAttribute('style');

    }

    if (scroll > headerH + 5295 ) {
        header.classList.remove('header-white');
        document.body.style.paddingTop = headerH + 'px';
    }

    if(window.matchMedia('(max-width: 1024px)').matches){
        if (scroll > headerH + 1250 ) {
            header.classList.add('header-white');
            document.body.style.paddingTop = headerH + 'px';
        } else  {
    
            header.classList.remove('header-white');
            document.body.removeAttribute('style');
    
        }
    
        if (scroll > headerH + 5850 ) {
            header.classList.remove('header-white');
            document.body.style.paddingTop = headerH + 'px';
        } 
    }


   



/*  */
    if (scroll > headerH + 5100 ) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    
        
    }

    if (scroll > headerHH + 1451 ) {
        headertwo.classList.add('blackder');
        document.body.style.paddingTop = headerHH + 'px';
    }  else  {

        headertwo.classList.remove('blackder');
        document.body.removeAttribute('style');

    }

    if (scroll > headerHH + 5100 ) {
        headertwo.classList.remove('blackder');
        document.body.style.paddingTop = headerHH + 'px';
    } 



    


   

 

   
    



    
    
}

 




/* $(window).load(windowSize);
$(window).resize(windowSize);
$(window).on('load resize',windowSize); */






/* document.onclick = function () {
    let click =  
}




 */

document.querySelector('#newoverlay').onclick = function(){
    document.querySelector('.overlay-two').classList.add('open-overlay');
    

}


document.querySelector('#close-overlay').onclick = function(){
    document.querySelector('.overlay-two').classList.remove('open-overlay');
    

}

document.querySelector('#hdtwo').onclick = function(){
    document.querySelector('.overlay-two').classList.add('open-overlay');
    

}

/* document.querySelector('#hdthree').onclick = function(){
    document.querySelector('.overlay-two').classList.add('open-overlay');
    

} */

/*  */



/*  */


const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const navigation = document.querySelector('.navigation-menu');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.add('active');
        navigation.classList.toggle('active');

    })

}

document.querySelector('#menu-cl').onclick = function(){
    document.querySelector('.navigation-menu').classList.remove('active');
}

document.querySelector('#close-three').onclick = function(){
    document.querySelector('.navigation-menu').classList.remove('active');
}

/* document.querySelector('.menu-fx').onclick = function(){
    document.querySelector('.navigation-one').classList.add('active-one');
}

document.querySelector('.menu-close').onclick = function(){
    document.querySelector('.navigation-one').classList.remove('active-one');
}
 */

document.querySelector('.menu-fx').onclick = function(){
    document.querySelector('.navigation-one').classList.add('active-one');
}

document.querySelector('.menu-close').onclick = function(){
    document.querySelector('.navigation-one').classList.remove('active-one');
}

document.querySelector('.tel-menu-four').onclick = function(){
    document.querySelector('.navigation-one').classList.remove('active-one');
}








/*  */








/*  */

new Swiper('.mygg',{
    //стрелки
    navigation: {
       nextEl:'.swiper-button-next',
       prevEl:'.swiper-button-prev'

   },
   slidesPerView: '1.6',
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
        /* delay:100, */
        //закончить на последнем слайдк
       /*  stopOnLastSlide: true, */
        //откл после ручного переключениея
/*         disableOnInteraction: false, */
        reverseDirection: true,

        delay: 1,
        disableOnInteraction: false,
       
        
    },


    freeMode: true,
    speed: 3500,
    freeModeMomentum: false,
    


   breakpoints: {


    300: {
        slidesPerView: 1.3,

        spaceBetween: 20,
       },


    405: {
        slidesPerView: 1.3,

        spaceBetween: 20,
       },



    434: {
        slidesPerView: 1.4,

        spaceBetween: 20,
       },



    467: {
        slidesPerView: 1.5,

        spaceBetween: 20,
       },


     530: {
        slidesPerView: 1.3,

        spaceBetween: 20,
       },

    


     621: {
        slidesPerView: 1.5,

        spaceBetween: 30,
       },

       663: {
        slidesPerView: 1.6,

        spaceBetween: 30,
       },

       600: {
        slidesPerView: 1.4,
        spaceBetween: 40,
       },


       642: {
        slidesPerView: 1.3,
        spaceBetween: 50,
       },

       735: {
        slidesPerView: 1.4,
        spaceBetween: 40,

       },


       777: {
        slidesPerView: 1.5,
        spaceBetween: 40,

       },

        853: {
        slidesPerView: 1.6,

       },

       897: {
        slidesPerView: 1.7,

       },

     

       995: {
        slidesPerView: 1.3,
        spaceBetween: 60,
       },

       1002: {
        slidesPerView: 1.4,
        spaceBetween: 40,
       },

       1080: {
        slidesPerView: 1.5,
        spaceBetween: 40,
       },


       1153: {
        slidesPerView: 1.6,
        spaceBetween: 40,
       },
       

      

       1228: {
        slidesPerView: 1.5, 
        spaceBetween: 40, 
       }, 

       1312: {
        slidesPerView: 1.6, 
        spaceBetween: 40, 
       }, 

       1424: {
           slidesPerView: 1.7,

       },


        1501: {
           slidesPerView: 1.7,

       },

        1513: {
           slidesPerView: 1.8,

       },

        1601: {
           slidesPerView: 1.9,

       },

         1657: {
           slidesPerView: 1.6,

       },

        1766: {
           slidesPerView: 1.65,
       },

       1875: {
           slidesPerView: 1.8,
       },
       
   },

});

/*  */

















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



/*  */



new Swiper('.ambs-one',{
    //стрелки
    navigation: {
       nextEl:'.swiper-button-next',
       prevEl:'.swiper-button-prev'
       

   },
   slidesPerView: '1',
   loop: true,
    spaceBetween: 80,   
   centeredSlides: true,
   keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
   },

 /*   mousewheel: {
       sensitivity: 1,
       //класс объекта на котором будет отрабатываться
      /*  eventsTarget: ".image-slider"  */ 



      pagination: {
        el: '.swiper-pagination',
    
        clickable: true,
       
        
     }, 

     
    




  /*   //автопрокрутка
    autoplay: {
        //пауза между прокруткой
        delay: 2000,
        //закончить на последнем слайдк
        stopOnLastSlide: true,
        //откл после ручного переключениея
        disableOnInteraction: false,
        reverseDirection: true
    },
 */

    speed: 800 ,

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



/*  */

/*  */
document.querySelector('.center-side').onclick = function(){
    document.querySelector('.ifr').classList.add('openyoutube');
    document.querySelector('.da').classList.add('close-butt');
}




document.querySelector('#join').onclick = function(){
    document.querySelector('.overlay').classList.add('open-join');

}

document.querySelector('#butter-footer').onclick = function(){
    document.querySelector('.overlay').classList.add('open-join');

}


document.querySelector('#overlay-close').onclick = function(){
    document.querySelector('.overlay').classList.remove('open-join');

}

/*  */



    document.querySelector('#button-one').onclick = function(){
        document.querySelector('.infor').classList.add('close-infor');
        document.querySelector('.infor-two').classList.add('close-infor-two');
    
    }

    
    document.querySelector('#butt-two').onclick = function(){
        document.querySelector('.infor-two').classList.remove('close-infor-two')
        document.querySelector('.infor-three').classList.add('close-infor-three');
    
    }


    document.querySelector('#butt-three').onclick = function(){
        document.querySelector('.infor-three').classList.remove('close-infor-three')
        document.querySelector('.infor-four').classList.add('close-infor-four');
    
    }


    document.querySelector('#overlay-close-two').onclick = function(){
        document.querySelector('.overlay').classList.remove('open-join');
    
    }


    document.querySelector('#overlay-close-three').onclick = function(){
        document.querySelector('.overlay').classList.remove('open-join');
    
    }

    
    document.querySelector('#overlay-close-four').onclick = function(){
        document.querySelector('.overlay').classList.remove('open-join');
    
    }

    document.querySelector('#circle').onclick = function(){
        document.querySelector('.infor-two').classList.remove('close-infor-two');
        document.querySelector('.infor').classList.remove('close-infor');
    
    }

    
    document.querySelector('#circle-two').onclick = function(){
        document.querySelector('.infor-three').classList.remove('close-infor-three');
        document.querySelector('.infor-two').classList.add('close-infor-two');
    
    }

    document.querySelector('#circle-three').onclick = function(){
        document.querySelector('.infor-four').classList.remove('close-infor-four');
        document.querySelector('.infor-three').classList.add('close-infor-three');
    
    }


    

 



    /*  */





    var swiper = new Swiper('.swiper-container',{
        //стрелки
    
    
        mousewheel: {
            releaseOnEdges:true ,
            sensitivity: 1 ,
          },
          direction: 'vertical',
    
          /* mousewheel: true, */
    
          speed:1000,

        /*   watchOverflow: true , */
    
    
          on: {
            slideChange: function() {
                setTimeout(function () {
                    swiper.params.mousewheel.releaseOnEdges = false;
                }, 500);
            },
            reachEnd: function() {
                setTimeout(function () {
                    swiper.params.mousewheel.releaseOnEdges = true;
                }, 1000);
                
            },

          },  

         loop:false,
 

 

       
      
    
        
    
     
    
      
     
    
        // включение и отключение
        // перетаскивания на pc
        simulateTouch: false,
        //чувствительность свайпа
        touchRatio: 1,
        //угол срабатывания свайпа
        touchAngle: 90,
        //курсор перетаскиваня
        grabCursor: false,
        //переключение на слайд при клике на него
        slideToClickedSlide: true,
        /* allowTouchMove: true, */
        allowTouchMove: false,
    
      
    
    
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

       
         effect: "cards",
        cardsEffect: {
            perSlideOffset: 10 , 
    
            perSlideRotate: 0,
            rotate: false ,
    
            
            
          },

       
        
    
        //адаптивность
        breakpoints: {
            320: {
                slidesPerView: 1,
              

             
            },
            480: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            }
        },
    
    
        
    });

  /*   swiper.on("touchStart", event => {
        startMoveEvent = event;
      }); */
    /*   swiper.on("reachBeginning", event => {
        swiper.allowTouchMove = false;
      });
 */
      swiper.on("tap", event => {
        swiper.allowTouchMove = true;
      });


      

   /*  productSwiper.swiper; */
    
    
    
    
    
  

   
    