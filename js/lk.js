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
            //$.fn.fullpage.setAllowScrolling(false);
            /*if (index == 3) {
            	$.fn.fullpage.setAllowScrolling(false);
            }else{
                $.fn.fullpage.setAllowScrolling(true);
            }*/
        },
        onLeave: function(index, direction) {
            
        }
    });

    /*动态页面切换*/

    $(".huodong .tab_btn ul li").click(function() {
        var index = $(this).index();
        $(".huodong .tab_btn ul li").eq(index).addClass("active").siblings().removeClass("active");
        $(".tab_con .tab_page").eq(index).addClass("active").siblings().removeClass("active");
    });


    $('.learn-more').click(function(){
        $.fn.fullpage.setAllowScrolling(false);
        $('.close').fadeIn().siblings('a').fadeOut();
        $('.more').show();
        $('.scroll_con').eq($(this).parents('li').index()).addClass('active').siblings().removeClass('active');
        $('.scroll').animate({'scrollTop':500},1000);
    })
    $('.close').click(function(){        
        $('.scroll').animate({'scrollTop':0},1000,function(){
            $('.close').fadeOut().siblings('a').fadeIn();
            $('.more').hide();
            $.fn.fullpage.setAllowScrolling(true);
        });
        
    })

    $('.form-left input[type="text"]').focus(function(){
        $(this).addClass('focus');
    })
    $('.form-left input[type="text"]').blur(function(){
        $(this).removeClass('focus');
    })

    $('.btnMore li').click(function(){
        $('.number').val($(this).text());
    })

})
