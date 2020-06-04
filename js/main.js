$(function () {

  $(".header__bottom").sticky({
    topSpacing: 0,
    zIndex: 999,
  });

  $('.hero-slider').slick({
    nextArrow: '<button type="button" class="hero__slick-btn hero__slick-next"></button>',
    prevArrow: '<button type="button" class="hero__slick-btn hero__slick-prev"></button>',
    infinite: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        }
      },
    ]  
  });

  $('select').styler();

  $('.news__slider-block').slick({
    nextArrow: '<button type="button" class="news__slick-btn news__slick-next"></button>',
    prevArrow: '<button type="button" class="news__slick-btn news__slick-prev"></button>',
    infinite: false
  });

  $('.nav__hamburger').on('click', function () {
    $('.nav__list').slideToggle();
  });

  /* Плавный скроллинг к якорю */
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(_href).offset().top - 70 + "px" });
    return false;
  });
  
});