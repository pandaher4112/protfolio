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
    //windowLoad
    $(window).on('load', function(){
        var winsize = $(window).width();
        if(winsize <= 520 ){
            $('.bl-topPickupNews').removeClass('fadeOut');
            $('.bl-topPickupNewsItems').removeClass('dspOff');
        }
    });
    
    //WindowResize
    $(window).resize(function(){
        var winsize = $(window).width();
        if(winsize <= 520 ){
            $('.bl-topPickupNews').removeClass('fadeOut');
            $('.bl-topPickupNewsItems').removeClass('dspOff');
        }
    });

    //pickupnews
    $(".el-topPickupNewsTitle").click(function(){
        var winsize = $(window).width();
        if(winsize >= 521 ){
            sLideMenu()
        }
    });
    const sLideMenu = () => {
        if($('.bl-topPickupNews').hasClass("fadeOut")){
            // スライドメニューが非表示なら表示
            $('.bl-topPickupNews').removeClass('fadeOut');
            $('.bl-topPickupNews').addClass('fadeIn');
            $('.bl-topPickupNewsItems').addClass('dspOn');
            $('.bl-topPickupNewsItems').removeClass('dspOff');
        } else {
            // スライドメニューがあれば非表示
            $('.bl-topPickupNewsItems').addClass('dspOff');
            $('.bl-topPickupNewsItems').removeClass('dspOn');
            $('.bl-topPickupNews').removeClass('fadeIn');
            $('.bl-topPickupNews').addClass('fadeOut');
        }        
    }
    //page scroll
    $(".bl-headerNavList a").click(function(){
        $(".bl-headerNavList").each(function(i,e){
            $(e).removeClass("bl-current");
        });
        var idx = $(".bl-headerNavList a").index(this);
        var sTop = $('body, html').scrollTop();
        console.log('番号:' + idx);
        var hash = $(this).attr('href');
        if(sTop == 0){
            sTop = 160 ;
        }
        else{
            sTop = 80;
        }
        var pos = $(hash).offset().top - sTop;
        // console.log('POS:' + pos + ",sTop=" + sTop);
        $(".bl-headerNavList").eq(idx).addClass("bl-current");
        $('body, html').animate({scrollTop: pos}, 500);
        return false
    });

    $(".el-humbergarMenuNavList a").click(function(){
        $(".el-humbergarMenuNavList").each(function(i,e){
            $(e).removeClass("bl-current");

        });
        var sTop = $('body, html').scrollTop();
        if(sTop == 0){
            sTop = 160 ;
        }
        else{
            sTop = 80;
        }
        var idx = $(".el-humbergarMenuNavList a").index(this);
        var hash = $(this).attr('href');
        var pos = $(hash).offset().top -sTop;
        // console.log('POS:' + pos + ",sTop=" + sTop);
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
