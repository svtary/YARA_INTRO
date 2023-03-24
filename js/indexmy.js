$(function() {
    //点击Li不需要执行页面滚动里面的li的背景选择 添加current
    //节流阀 互斥锁
    var flag = true;

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    var toolTop = $(".recom").offset().top;
    toggleTool();
    $(window).scroll(function() {

        toggleTool();
        if (flag) {
            $(".tab_content").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }

            });
        }


    });
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        var current = $(".tab_content").eq($(this).index()).offset().top;
        console.log($(".tab_content").eq($(this).index()).offset());
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass("current");
    })
})