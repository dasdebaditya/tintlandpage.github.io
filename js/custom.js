
/* -------------------------------  
         LOADER JS START
/* ----------------------------- */
var $preloader = $('.loader'),
$spinner   = $preloader.find('.nothing');
$spinner.fadeOut();
$preloader.delay('300').fadeOut(100);

$(document).ready(function(){      
  // fancybox_image
  $('.campusfancybox').fancybox({
  // Options will go here
  }); 

  // fancybox_ video
  $('.playvideofancybox').fancybox({
      youtube : {
          controls : 0,
          showinfo : 0
      },
      vimeo : {
          color : 'f00'
      }
  });
}); 

//facility Carousel
$("#offered-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed: 2000, // Default is 250
  items: 4, //Set Testimonial items
  loop: true,
  margin: 0,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
        autoplay: true,
    },
    384:{
        items:1,
        autoplay: true,
    },
    568:{
        items:2,
        autoplay: true,
    },
    768:{
        items:2,
        autoplay: true,
    },
    992:{
        items:3,
        autoplay: true,
    },
    1025:{
        items:3,
        autoplay: true,
    },
    1199:{
        items:4,
    }
  }      
}); 

//collab Carousel
$("#collab-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed: 2000, // Default is 250
  items: 3, //Set Testimonial items
  loop: true,
  margin: 5,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa fa-angle-left'></i>","<i class='fa fa fa-angle-right'></i>"], 
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
    },
    384:{
        items:2,
        margin: 10,
    },
    575:{
        items:2,
    },
    768:{
        items:3,
    },
    992:{
        items:3,
    },
    1199:{
        items:3,
    }
  }      
}); 

//alumni Carousel
$("#alumni-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed: 2000, // Default is 250
  items: 4, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa fa-angle-left'></i>","<i class='fa fa fa-angle-right'></i>"], 
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
        autoplay: true,
        margin: 0,
    },
    384:{
        items:1,
        autoplay: true,
        margin: 0,
    },
    575:{
        items:3,
        autoplay: true,
    },
    768:{
        items:3,
        autoplay: true,
    },
    992:{
        items:3,
        autoplay: true,
    },
    1025:{
        items:4,
        autoplay: true,
    },
    1199:{
        items:4,
    }
  }   
}); 

//feature Carousel
$("#feature-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed: 2000, // Default is 250
  items: 7, //Set Testimonial items
  loop: true,
  margin: 0,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa fa-angle-left'></i>","<i class='fa fa fa-angle-right'></i>"], 
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
        autoplay: true,
    },
    384:{
        items:1,
        autoplay: true,
    },
    575:{
        items:3,
        autoplay: true,
    },
    768:{
        items:4,
        autoplay: true,
    },
    992:{
        items:5,
        autoplay: true,
    },
    1025:{
        items:5,
        autoplay: true,
    },
    1199:{
        items:7,
    }
  }      
}); 

//rec Carousel
$("#rec-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed: 2000, // Default is 250
  items: 3, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa fa-angle-left'></i>","<i class='fa fa fa-angle-right'></i>"], 
  responsiveClass:true,
  responsive:{
    0:{
        items:2,
    },
    384:{
        items:2,
    },
    575:{
        items:3,
    },
    768:{
        items:3,
    },
    992:{
        items:3,
    },
    1199:{
        items:3,
    }
  }      
}); 

// awards-slider Carousel
$("#awards-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed: 2000, // Default is 250
  items: 4, //Set Testimonial items
  loop: true,
  margin: 25,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  // navText: ["<i class='fa fa-arrow-right'></i>", "<i class='fa fa-arrow-right'></i>"],
  navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
        autoplay: true,
    },
    384:{
        items: 1,
        autoplay: true,
        margin: 5,
    },
    568:{
        items:2,
        autoplay: true,
    },
    768:{
        items:3,
        autoplay: true,
    },
    992:{
        items:3,
        autoplay: true,
        margin: 15,
    },
    1025:{
        items:3,
        autoplay: true,
        margin: 15,
    },
    1199:{
        items:4,
    }
  }      
}); 

//Client Carousel
$("#client-slider").owlCarousel({
  //autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed: 2000, // Default is 250
  items: 5, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: false,
  dots: false,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
    },
    568:{
      items:2,
    },
    600:{
      items:3,
    },
    667:{
      items:3,
    },
    1000:{
      items:5,
    }
  }   
});       
  

//Client Carousel
$("#student-speak").owlCarousel({
  autoPlay: 5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed: 2000, // Default is 250
  items: 3, //Set Testimonial items
  loop: true,
  margin: 0,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
        items:1,
    },
    425:{
        items:2,
    },
    575:{
        items:3,
    },
    768:{
        items:3,
    },
    1000:{
        items:3,
    }
  }       
}); 

/* -------------------------------  
         POP JS START
/* ----------------------------- */
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
});
            

/* -------------------------------  

         WOW ANIMATED JS START

/* ----------------------------- */

new WOW().init();

/* -------------------------------  

        INPUT PLACEHOLDER

/* ----------------------------- */

$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','');
}).blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

/* ---------------------    

        STICKY NAV

/* --------------------- */

var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
  if (scrollTop > stickyNavTop) {
    $('#header').addClass('sticky');
  } else {
    $('#header').removeClass('sticky'); 
  }
};

stickyNav(); 

$(window).scroll(function() {
  stickyNav();
});

/* ---------------------    

        back-top

/* --------------------- */

if ($('#back-top').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-top').addClass('show');
      } else {
        $('#back-top').removeClass('show');
      }
    };
    backToTop();

    $(window).on('scroll', function () {
      backToTop();
    });

    $('#back-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
    });
}

$(document).ready(function () {
  $('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });



// ######################### Conditions START #########################

if ($(window).width() <= 767) {
  // alert('mobile enter');
    // sideNavi
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 50) {
          $('#sideNavi').fadeIn();
      } else {
          $('#sideNavi').fadeOut();
      }
    });

 } else {
  // alert('Desktop enter');
}

// ######################### Conditions CLOSE #########################

});

