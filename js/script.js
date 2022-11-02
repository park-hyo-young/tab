$(document).ready(function(){
    var idx_01 = 0;
   
    // 탭 메뉴 전환
    $('.tab_btns').find("li").on('click', function(e){
        e.preventDefault();
        var me = $(e.currentTarget);
            idx_01 = me.index();

        $('.tab_btns li').removeClass('active');
        me.addClass('active');
        
        viewItem(idx_01);
    });

    // 탭메뉴 좌/우 이동
    // $('.prev a').on('click', function(e){
    //     e.preventDefault();
    //     idx_01--;
    //     if (idx_01 < 0) {
    //         idx_01 = 0
    //     viewItem(idx_01);
    //     Indigate(idx_01);
    // });
    // $('.next a').on('click', function(e){
    //     e.preventDefault();
    //     idx_01++;
    //     if (idx_01 > $(".tab_btns li").length - 1) {
    //         idx_01 = $(".tab_btns li").length - 1
    //     }
    //     viewItem(idx_01);
    //     Indigate(idx_01);
    // });

    // 탭메뉴 루프
    $('.prev a').on('click', function(e){
        e.preventDefault();
        idx_01--;
        if (idx_01 < 0) {
            idx_01 = $(".tab_btns li").length - 1
        }
        viewItem(idx_01);
        Indigate(idx_01);
    });
    $('.next a').on('click', function(e){
        e.preventDefault();
        idx_01++;
        if (idx_01 > $(".tab_btns li").length - 1) {
            idx_01 = 0
        }
        viewItem(idx_01);
        Indigate(idx_01);
    });
    
    function viewItem(idx_01){
        var idx_01 = idx_01;
        $('.tab_area li').hide();
        $('.tab_area li').eq(idx_01).show();
    }
    function Indigate(idx_01){
        var idx_01 = idx_01;
        $('.tab_btns li').removeClass('active');
	    $('.tab_btns li').eq(idx_01).addClass('active');
    }

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