
$(document).ready(function() {
    $('.next').click(function () {
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nextImadeIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImadeIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');

        if(nextImadeIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else{
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
        }
    });
    $(document).ready(function() {
        $('.prev').click(function () {
            var currentImage = $('.img.curry');
            var currentImageIndex = $('.img.curry').index();
            var prevImadeIndex = currentImageIndex - 1;
            var prevImage = $('.img').eq(prevImadeIndex);
            currentImage.fadeOut(1000);
            currentImage.removeClass('curry');
            prevImage.fadeIn(1000);
            prevImage.addClass('curry');
        })
    })
});


//второй вариант слайдера, не адаптируется!
// $(document).ready(function() {
//     $(".slider").each(function () { // обрабатываем каждый слайдер
//         var obj = $(this);
//         $(obj).append("<div class='nav'></div>");
//         $(obj).find("li").each(function () {
//             $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
//             $(this).addClass("slider"+$(this).index());
//         });
//         $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
//     });
// });
// function sliderJS (obj, sl) { // slider function
//     var ul = $(sl).find("ul"); // находим блок
//     var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
//     var step = $(bl).width(); // ширина объекта
//     $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
// }
// $(document).on("click", ".slider .nav span", function() { // slider click navigate
//     var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
//     $(sl).find("span").removeClass("on"); // убираем активный элемент
//     $(this).addClass("on"); // делаем активным текущий
//     var obj = $(this).attr("rel"); // узнаем его номер
//     sliderJS(obj, sl); // слайдим
//     return false;
// });