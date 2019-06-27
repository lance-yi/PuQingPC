$(function () {

    var swiperH = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next-v',
            prevEl: '.swiper-button-prev-v',
        }
    });

    $(".swiper-slide .case-info-card").click(function (e) { 
        e.preventDefault();
        console.log($(this).data('id'))
        
    });
});
