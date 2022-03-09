$(document).ready(function () {

  // Поиск в хедере
  $('.js-top-search').find('input').focusin(function () { // Проверяем фокус
    $(".js-top-search").addClass("focus");
  });
  $('.js-top-search').find('input').focusout(function () { //убираем фокус
    if ($(this).val() === '') { //проверяем input на пустоту
      $(".js-top-search").removeClass("focus");
    }

  });

  //Авторизация
  $('.header__main-login').click(function () { //отображаем интерфейс для авторизированного пользователя
    $('.header__main-auth-block').addClass('is-authorized')
  });

  //Главный баннер
  $('.js-main-slider').on('init', function (slick) {
    $('.js-slider-nav').css('opacity', 1);
    $('.js-product__prev').css('opacity', 1);
    $('.js-product__next').css('opacity', 1);
  });
  $('.js-main-slider').slick({
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow--back" style=""><svg class="icon icon-left"> <use xlink:href="#icon-left"></use> </svg></button>',
    nextArrow: '<button type="button" class="slick-arrow--next" style=""><svg class="icon icon-right"> <use xlink:href="#icon-right"></use> </svg></button>',
  });

  //Продуктовый слайдер
  $('.pop-goods__product-list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  //Сервис - табы
  $('.js-tab-nav').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tab'); //получаем дата-атрибут навигации
    var tabContent = $('.js-tab-content[data-tab="' + id + '"]'); //Получаем дата-атрибут таба

    $('.js-tab-nav.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content.active').removeClass('active');
    tabContent.addClass('active');
  });

    //Модальные окна
    $('a[data-target="modal"').click(function(e) {
      e.preventDefault();
      link = $(this).attr("data-modal");
      if (!$('.modal').hasClass('show')) {
        $('#' + link).addClass('show');
        $('body').addClass('modal-open');
        $('.js-modal-fade').addClass("show");
        closeOutModal();
      }
    });

    // Закрытие модального окна
    $('.js-modal-close').click(function(e){
      e.preventDefault();
        $(this).parents(".js-modal").removeClass("show");
        $('body').removeClass('modal-open');
        $('.js-modal-fade').removeClass("show");
    });

    //Закрытие модального окна по клику вне области
    function closeOutModal() {
      $(document).click(function(e){
        if (!$(e.target).closest(".js-modal-content").length && !$(e.target).closest('a[data-target="modal"').length) {
        $('.js-modal').removeClass("show");
          $('body').removeClass('modal-open');
          $('.js-modal-fade').removeClass("show");
        }
      });
    };


});
