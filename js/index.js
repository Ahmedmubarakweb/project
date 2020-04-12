const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
    960: {
        items: 2
    }
  }
  $('.cards').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow:3 ,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
     //show scroll button 
     var btnScroll= $(".move-up");
     btnScroll.hide();
     $(window).scroll(function(){
       if($(this).scrollTop()>900){
        btnScroll.show();
       }
       else
       btnScroll.hide();
     })
   //when button clicked
     btnScroll.click(function(){
      $('html,body').animate({scrollTop:0},700);
  });
