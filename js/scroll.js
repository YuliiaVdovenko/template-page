// плавный скролл с дабавление data-target на все необходимые ссылки-якоря
$(document).ready(function(){
    //указываем что все ссылки которые имеют data-target который начинается с anchor
    $('a[data-target^="anchor"]').on('click', function () {
        var target = $(this).attr('href'),
            // узнаем расстояние относительно верха
            bl_top = $(target).offset().top;
        // указываем анимацию на расстояние которое вычесленно выше
        $('body,html').animate({scrollTop: bl_top}, 1500);
        return false;
    })
});


// плавный скрол только для меню в хедере
// $ ('.container nav a').click(function () {
//     var element = $(this).attr('href');
//     var dist = $(element).offset().top;
//
//     $('body,html').animate({'scrollTop': dist}, 1000);
//     return false;
// });


// подсветка активных а, но почему-то не работает. В sass стиль прописывать через псевдокласс или класс?
// почему не срабатывает добавление класса?
// срабатывает только псевдокласс при нажании но не при прокрутке
$(window).scroll(function () {
    $('section[id]').each(function () {
        var id = $(this).attr('id');
        if($(this).offset().top-100 < $(window).scrollTop()){
            $('a[data-target^="anchor" '+id+']').addClass('active').siblings().removeClass('active');
    }

        if($(window).scrollTop() < 900){
            $('a[data-target^="anchor"]').removeClass('active');
        }
    });
});

// закрытие гамбургера после перехода к а
//при нажатии на ссылку
$(".navbar-collapse a").click(function() {
    //если она не имеет класс dropdown-toggle
    if (!$(this).hasClass("dropdown-toggle")) {
        //то закрыть меню
        $(".navbar-collapse").collapse('hide');
    }
});


// // добавление фокуса на активную ссылку еще один метод. не сработал
// $(function() {
//     // путь текущей страницы
//     var pathPage = location.pathname.slice(1);
//     var parentUl = $(".navbar-nav a[href*='+pathPage']").closest('li').addClass('active').parent('ul');
//     if (parent.closest('.navbar-nav li').length) {
//         parentUl.closest('li').addClass('active');
//     }
// });


