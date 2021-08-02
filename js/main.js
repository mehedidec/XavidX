$(function(){
  //preloader part start
  $(window).on('load', function () {
    $(".preloader").delay(1200).fadeOut(function(){
        $('body').removeClass('prex');
    });
});


    //banner slide
    $('.banner_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#banner .prev',
        nextArrow:'#banner .next',
        dots: true
      });

    //scroll
    $(window).scroll(function () { 
      var scrolling = $(this).scrollTop();

    //back to top
       if(scrolling > 20){
           $(".back_to_top i").fadeIn()
       }else{
           $(".back_to_top i").fadeOut()
       }

    //navbar
       if(scrolling > 30){
           $("nav").addClass("navbgs")
       }else{
          $("nav").removeClass("navbgs")
       }
  });

    //back to top
   $(".back_to_top i").click(function () { 
       $('html, body').animate({
           scrollTop:0
       }, 1000);
  });

    //work category
    var mixer = mixitup('.work-main');

    //testimonial slide
    $('.testimonial_main').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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

     //scroll animation
    var html_body = $('html, body');
    $('nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });

    //dark theme
    $("#darkmode").click(function(){

      //body dark
      $("body").toggleClass("dark-mode")

      //about dark
      $("#about .about_content").toggleClass("darkabout-bg")
      $("#about .about_content .about_btn a").toggleClass("darkabout-btn")

      //work dark
      $("#work .work_head i").toggleClass("darkwork-head")
      $("#work .work_head p").toggleClass("darkwork-p")
      $("#work .work_head .work_category .wc_btn").toggleClass("darkwork-btn")

      //testimonial dark
      $("#testimonial .testimonial_head i").toggleClass("darktestimonial-head")
      $("#testimonial .testimonial_main p").toggleClass("darktestimonial-p")
      $("#testimonial .testimonial_main .testimonial_bottom h6").toggleClass("darktestimonial-pbtm")
      $("#testimonial .slick-dots li button").toggleClass("darktestimonial-dots")
      $("#testimonial .slick-dots .slick-active button").toggleClass("darktestimonial-dots-active")

      //footer dark
      $("#footer").toggleClass("darkfooter-bg")

      //credit dark
      $("#credit").toggleClass("darkcredit-bg")

      //btt dark
      $(".back_to_top i").toggleClass("darkbtt-bg")
    });
});