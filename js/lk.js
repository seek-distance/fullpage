$(function() {
    var pHeight = $(window).height();
    var pWidth = $(window).width();
    $(".index").css("width", pWidth).css("height", pHeight);
    $(".page_1").css("width", pWidth).css("height", pHeight);
    $(".con_top").css("width", pWidth).css("height", pHeight);

    $(window).resize(function() {
        var pHeight = $(window).height();
        var pWidth = $(window).width();
        $(".index").css("width", pWidth).css("height", pHeight);
        $(".page_1").css("width", pWidth).css("height", pHeight);
        $(".con_top").css("width", pWidth).css("height", pHeight);
    });



    var t = true;
    $(".nav_x").click(function() {
        if (t) {
            $(".nav ul").animate({ "opacity": "1" });
            $(".nav_x").addClass("scla");
            t = false;
        } else {
            $(".nav ul").animate({ "opacity": "0" });
            $(".nav_x").removeClass("scla");
            t = true;
        }

    });



    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],

        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                $.fn.fullpage.setAllowScrolling(true);
            }
            if (index == 2) {
                $.fn.fullpage.setAllowScrolling(true);
            }
            if (index == 3) {
                $.fn.fullpage.setAllowScrolling(true);
            }
            if (index == 4) {
            	$.fn.fullpage.setAllowScrolling(false);
                var scrollHeight = $(".scroll").height();
            	$(".scroll").scroll(function() {
                    var top = $(".scroll").scrollTop();

                    if (top >= scrollHeight || top<=0) {
                        $.fn.fullpage.setAllowScrolling(true);
                    }


                });
                /*var scrollHeight = $(".scroll").height();
                $(".scroll").scroll(function() {
                    var top = $(".scroll").scrollTop();
                    if (top > 100) {
                        $.fn.fullpage.setAllowScrolling(false);
                    }

                    if (top >= 750) {
                        $.fn.fullpage.setAllowScrolling(true);
                    }


                });*/



            }
        },
        onLeave: function(index, direction) {
            if (index == '2') {}
            if (index == '3') {

            }
            if (index == '4') {
                /*var scrollHeight = $(".scroll").height();
                $(".scroll").scroll(function() {

                    var top = $(".scroll").scrollTop();
                    if (top <= 100) {
                        $.fn.fullpage.setAllowScrolling(true);
                    }

                });*/
            }


        }
    });

    /*动态页面切换*/

    $(".huodong .tab_btn ul li").click(function() {
        var index = $(this).index();
        $(".huodong .tab_btn ul li").eq(index).addClass("active").siblings().removeClass("active");
        $(".tab_con .tab_page").eq(index).addClass("active").siblings().removeClass("active");
    });



   /* $('.nav_btn i').mouseenter(function(){
    	$(this).fadeOut();
    	$('.nav_btn ul').fadeIn();
    })
    $('.nav_btn').mouseleave(function(){
    	$('.nav_btn ul').fadeOut();
    	$('.nav_btn i').fadeIn();
    })*/
})
