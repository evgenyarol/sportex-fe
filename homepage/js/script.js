

/*  */
new Swiper('.crd',{
    //стрелки
   slidesPerView: '4',
   spaceBetween:  30,   
   


  


   breakpoints: {

     320: {
           slidesPerView: 1.19,
           spaceBetween: 10, 
           pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
           
       },

       407 : {
           slidesPerView: 1.3,
           pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 

            
           
           
       },


       488: {
           slidesPerView: 1.5,
           pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },


       600: {
        slidesPerView: 1.8,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },




       646: {
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },




       710: {
        slidesPerView: 2.2,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },







       768: {
        slidesPerView: 2.15,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },

       822: {
        slidesPerView: 2.3,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },

       902: {
        slidesPerView: 2.5,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },

       1012: {
        slidesPerView: 2.8,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },


       1100: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
       },

       
       1250: {
           slidesPerView: 3.2,
           spaceBetween:  30,
           pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
           
       },
       1400: {
           slidesPerView: 3.3,
           spaceBetween:  0, 
           pagination: {
            el: '.swiper-pagination',
        
            clickable: true,

         }, 
           
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

    if (scroll > headerH + 7120 ) {
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

        reverseDirection: true,

        delay: 1,
        disableOnInteraction: false,
       
        
    },


    freeMode: true,
    speed: 3500,
    freeModeMomentum: false,
    


   breakpoints: {

    300: {
        slidesPerView: 1.1,
        spaceBetween:500,
      },

    361: {
        slidesPerView: 1.1,
        spaceBetween:450,
      },

    413: {
        slidesPerView: 1.1,
        spaceBetween:400,
      },

    455: {
        slidesPerView: 1.1,
        spaceBetween:350,
      },

    510: {
        slidesPerView: 1.1,
        spaceBetween:300,
      },


    560: {
        slidesPerView: 1.1,
        spaceBetween: 250,
      },


    
    607: {
        slidesPerView: 1.1,
        spaceBetween: 200,
      },


    657: {
        slidesPerView: 1.1,
        spaceBetween: 150,
      },


    707: {
        slidesPerView: 1.1,
        spaceBetween: 100,
      },



    741: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },






    798: {
        slidesPerView: 1.28,
      },


    823: {
        slidesPerView: 1.31,
      },


    1033: {
        slidesPerView: 1.41,
      },



    1107: {
        slidesPerView: 1.5,
      },


     1256: {
        slidesPerView: 1.6,
      },


     1351: {
        slidesPerView: 1.72,
      }, 

      1421: {
        slidesPerView: 1.8,
      }, 




      1493: {
           slidesPerView: 1.7,
       }, 




        1638: {
           slidesPerView: 1.8,
       }, 


   

     
   },

});

/*  */
















/* 
document.querySelector('#plus1').onclick = function(){
    document.querySelector('#info1').classList.toggle('answer-hide');
    document.querySelector('#plus1').classList.toggle('close');
    document.querySelector('#colorh').classList.toggle('color');
} */

document.querySelector('#plus11').onclick = function(){
    document.querySelector('#info1').classList.toggle('answer-hide');
    document.querySelector('#plus1').classList.toggle('close');
    document.querySelector('#colorh').classList.toggle('color');
}



/* 2 */
document.querySelector('#plus33').onclick = function(){
    document.querySelector('#info2').classList.toggle('answer-hide');
    document.querySelector('#plus2').classList.toggle('close');
    document.querySelector('#colorh1').classList.toggle('color');
}

/* 3 */

document.querySelector('#plus22').onclick = function(){
    document.querySelector('#info3').classList.toggle('answer-hide');
    document.querySelector('#plus3').classList.toggle('close');
    document.querySelector('#colorh2').classList.toggle('color');
}

/* 4 */

document.querySelector('#plus44').onclick = function(){
    document.querySelector('#info4').classList.toggle('answer-hide');
    document.querySelector('#plus4').classList.toggle('close');
    document.querySelector('#colorh3').classList.toggle('color');
}

/* 5 */

document.querySelector('#plus55').onclick = function(){
    document.querySelector('#info5').classList.toggle('answer-hide');
    document.querySelector('#plus5').classList.toggle('close');
    document.querySelector('#colorh4').classList.toggle('color');
}

/* 6 */

document.querySelector('#plus66').onclick = function(){
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
    spaceBetween: 10,   
   /* centeredSlides: true, */
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

    speed: 1000 ,

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





   




  



    
    
   

   

  
    

     /*  swiper.on("reachBeginning", event => {
        swiper.params.mousewheel.releaseOnEdges = true;
      });
    */
    
      

   /*  productSwiper.swiper; */
    
    
   $(document).ready(function() {
    var loops = 2 * 1;
    function removeAddClass() {
        $(".back-side").toggleClass("newtry");
        $(".first-side").toggleClass("heplanim");
        if (--loops > 0)
             setTimeout(removeAddClass, 3500);
    }
    removeAddClass();
});




/*  */


new Swiper('.cards-mobile',{
    //стрелки
   slidesPerView: '1',
   loop: true,
   spaceBetween: 30,   
   keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
   },

   speed: 1000,

    //управление мышью
    mousewheel: {
        sensitivity: 1,
        //класс объекта на котором будет отрабатываться
        /* eventsTarget: ".image-slider" */
    },

   scrollbar: {
       el: '.swiper-scrollbar',
       //возможность пертаскивать скрол
       draggable: true
   },

   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

   breakpoints: {
       320: {
           slidesPerView: 1,
       },
       480: {
           slidesPerView: 1,
       },
       992: {
           slidesPerView: 1,
       },

       1300: {
           slidesPerView: 1,
       }
   },

});


  



     
 
    


    


/* lang mobile */



document.querySelector('#firstlang').onclick = function(){
    document.querySelector('.more-lang').classList.toggle('langinfo');
    document.querySelector('.more-langtwo').classList.toggle('langinfotwo');

}


document.querySelector('#formylang').onclick = function(){
    document.querySelector('.langueges').classList.toggle('opas');
    document.querySelector('.langueges2').classList.toggle('opas2');

}

document.querySelector('#blacklang').onclick = function(){
    document.querySelector('.langitlackmenu').classList.toggle('newone');
    document.querySelector('.langEnglackmenu').classList.toggle('newone2');

}

document.querySelector('#onemorespisok').onclick = function(){
    document.querySelector('.firstspisok').classList.toggle('etoon');
    document.querySelector('.secondspisok').classList.toggle('ett');

}