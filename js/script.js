$(document).ready(function(){
    // 탭 메뉴 전환
    $('.btn').click(function(){
        var idx_01 = $('.btn').index(this);
        $('.btn').removeClass('active');
        $(this).addClass('active');
        $('.tab_area li').css('display','none');
        $('.tab_area li').eq(idx_01).css('display','block');
    });

    // 탭메뉴 좌/우 이동
    // $('.prev a').click(function(){
    // });

    // $('.next a').click(function(){
    // });

    // 팝업창
    $('.img_box').on('click', function(e){
        var idx_02 = $('.img_box').index(this);
        var num = idx_02 + 1;
		e.preventDefault();
        $(".popup").stop().show(100);
        $(".popup_wrap figure img").remove();
		$(".popup_wrap figure").prepend('<img src="images/img_EDMS_func_' + num + '_big.jpg">');
    });
    $('.popup_close').on('click', function(e){
		e.preventDefault();
        $(".popup").stop().hide(100);
    })
});