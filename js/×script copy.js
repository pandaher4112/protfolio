$(function(){
    //swiper
    let swipeOption = {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay : 4000,
            disableOnInteraction: false,
        },
        speed: 3000,
    }
    new Swiper('.swiper', swipeOption);

    //fixedheader
    $(window).scroll(function(){
        var pos = $('#sample').offset();
        if($(this).scrollTop() > pos.top){
            $(".header").css('position', 'fixed');
        } 
        else{
            $(".header").css('position', 'static');
        }
    });
    //pickupnews
    $(".el-topPickupNewsTitle").click(function(){
        var winsize = $(window).width();
        $(".el-topPickupNewsTitle").css('width','30px');
        if(winsize >= 521 ){
            console.log('クリックされた:' + winsize) ;
            var elemSlide = $(".bl-topPickupNews");
            elemSlide.animate({
              'width': (elemSlide.css('width') == '30px') ? '370px' : '30px'},
                function(){
                    if(elemSlide.css('width') == '30px'){
                        console.log('確認' + elemSlide.width());
                        $(".bl-topPickupNewsItems").css('display','none');
                    }
                    else{
                        $(".bl-topPickupNewsItems").css('display','block');
                    }
                }
            );
        }else{
            $(".bl-topPickupNews").css('width','370px');
            $(".el-topPickupNewsTitle").css('width','370px');
        }
    });
    //page scroll
    $(".bl-headerNavList a").click(function(){
        $(".bl-headerNavList").each(function(i,e){
            // console.log('インデックス番号:' + i );
            $(e).removeClass("bl-current");

        });
        var idx = $(".bl-headerNavList a").index(this);
        console.log('番号:' + idx)
        var hash = $(this).attr('href');
        var pos = $(hash).offset().top;
        $(".bl-headerNavList").eq(idx).addClass("bl-current");
        $('body, html').animate({scrollTop: pos}, 500);
        return false
    });

    $(".el-humbergarMenuNavList a").click(function(){
        $(".el-humbergarMenuNavList").each(function(i,e){
            // console.log('インデックス番号:' + i );
            $(e).removeClass("bl-current");

        });
        var idx = $(".el-humbergarMenuNavList a").index(this);
        var hash = $(this).attr('href');
        var pos = $(hash).offset().top;
        $('body, html').animate({scrollTop: pos}, 500);
        $(".openbtn4").removeClass("active");
        $(".bl-humbergarMenuNav").fadeOut();
        $(".el-humbergarMenuNavList").eq(idx).addClass("bl-current");
        return false
    });

    //humbergerMenu
    $(".openbtn4").click(function () {
        $(this).toggleClass('active');
        $(".bl-humbergarMenuNav").slideToggle();    //表示非表示の設定
    });
});
