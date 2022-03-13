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
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            }),

        // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [55.8, 37.8]
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    iconContent: 'Я тащусь',
                    hintContent: 'Ну давай уже тащи'
                }
            }, {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon',
                // Метку можно перемещать.
                draggable: true
            }),
            myPieChart = new ymaps.Placemark([
                55.847, 37.6
            ], {
                // Данные для построения диаграммы.
                data: [
                    {weight: 8, color: '#0E4779'},
                    {weight: 6, color: '#1E98FF'},
                    {weight: 4, color: '#82CDFF'}
                ],
                iconCaption: "Диаграмма"
            }, {
                // Зададим произвольный макет метки.
                iconLayout: 'default#pieChart',
                // Радиус диаграммы в пикселях.
                iconPieChartRadius: 30,
                // Радиус центральной части макета.
                iconPieChartCoreRadius: 10,
                // Стиль заливки центральной части.
                iconPieChartCoreFillStyle: '#ffffff',
                // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
                iconPieChartStrokeStyle: '#ffffff',
                // Ширина линий-разделителей секторов и внешней обводки диаграммы.
                iconPieChartStrokeWidth: 3,
                // Максимальная ширина подписи метки.
                iconPieChartCaptionMaxWidth: 200
            });

        myMap.geoObjects
            .add(myGeoObject)
            .add(myPieChart)
            .add(new ymaps.Placemark([55.684758, 37.738521], {
                balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
            .add(new ymaps.Placemark([55.833436, 37.715175], {
                balloonContent: '<strong>серобуромалиновый</strong> цвет'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#735184'
            }))
            .add(new ymaps.Placemark([55.687086, 37.529789], {
                balloonContent: 'цвет <strong>влюбленной жабы</strong>'
            }, {
                preset: 'islands#circleIcon',
                iconColor: '#3caa3c'
            }))
            .add(new ymaps.Placemark([55.782392, 37.614924], {
                balloonContent: 'цвет <strong>детской неожиданности</strong>'
            }, {
                preset: 'islands#circleDotIcon',
                iconColor: 'yellow'
            }))
            .add(new ymaps.Placemark([55.642063, 37.656123], {
                balloonContent: 'цвет <strong>красный</strong>'
            }, {
                preset: 'islands#redSportIcon'
            }))
            .add(new ymaps.Placemark([55.826479, 37.487208], {
                balloonContent: 'цвет <strong>фэйсбука</strong>'
            }, {
                preset: 'islands#governmentCircleIcon',
                iconColor: '#3b5998'
            }))
            .add(new ymaps.Placemark([55.694843, 37.435023], {
                balloonContent: 'цвет <strong>носика Гены</strong>',
                iconCaption: 'Очень длиннный, но невероятно интересный текст'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }))
            .add(new ymaps.Placemark([55.790139, 37.814052], {
                balloonContent: 'цвет <strong>голубой</strong>',
                iconCaption: 'Очень длиннный, но невероятно интересный текст'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }));
    }


});
