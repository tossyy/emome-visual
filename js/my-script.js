$(".open-btn").click(function() {
    $(".g-nav").toggleClass('panelinactive');
    $(".home-content").toggleClass('fullwindow');
});

function GethashId(hashIDName) {
    if(hashIDName) {
        $('.ranking-list li').find('a').each(function() {
            var idNmae = $(this).attr('href');
            if(idNmae == hashIDName) {
                var parentElm = $(this).parent();
                $('.ranking-list li').removeClass("active");
                $(parentElm).addClass("active");
                $(".big-movie").removeClass("active");
                $(hashIDName).addClass("active");
            }
        })
    }
}

$('.ranking-list a').on('click', function() {
    var idName = $(this).attr('href');
    GethashId(idName);
    return false;
});

$(window).on('load', function() {
    $('.ranking-list li:first-of-type').addClass("active");
    $('.big-movie:first-of-type').addClass("active");
    var hashName = location.hash;
    GethashId(hashName);
});