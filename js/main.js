//滚动检测
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".main-header").css({
            "position": "fixed",
            "top": 0,
            "z-index": 1030,
            "background": "#fff",
            "box-shadow": "0 6px 6px 0 rgba(232,237,250,.6)"
        });
        $(".top-bar").css("display", "none");
        
    } else {
        $(".main-header").removeClass("active");
        $(".top-bar").css("display", "block");
        $(".main-header").css("position", "relative");
    }
});
