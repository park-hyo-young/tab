$(document).ready(function(){
    var index = 0;
   
    // 탭 메뉴 전환
    $('.tab_btns').find("li").on('click', function(e){
        e.preventDefault();
        var me = $(e.currentTarget);
            index = me.index();
        console.log(index);
        $('.tab_btns li').removeClass('active');
        me.addClass('active');
        viewItem(index);
    });

    // 탭메뉴 좌/우 이동
    // $('.next a').on('click', function(e){
    //     e.preventDefault();
    //     index++ ;
    //     if (index > $(".tab_btns li").length - 1){
    //         index = $(".tab_btns li").length - 1
    //     }
    //     console.log(index);
    //     Indigate(index);
    //     viewItem(index);
    // });
    // $('.prev a').on('click', function(e){
    //     e.preventDefault();
    //     index-- ;
    //     if (index < 0){
    //         index = 0
    //     }
    //     console.log(index);
    //     Indigate(index);
    //     viewItem(index);
    // });

    // 탭메뉴 루프
    $('.next').on('click', function(e){
        e.preventDefault();
        index++ ;
        if (index > $(".tab_btns li").length - 1){
            index = 0;
        }
        console.log(index);
        Indigate(index);
        viewItem(index);
    });
    $('.prev').on('click', function(e){
        e.preventDefault();
        index-- ;
        if (index < 0){
            index = $(".tab_btns li").length - 1;
        }
        console.log(index);
        Indigate(index);
        viewItem(index);
    });
    
    function Indigate(index){
        var index=index;
        $('.tab_btns li').removeClass('active');
        $('.tab_btns li').eq(index).addClass('active');
    }
    function viewItem(index){
        var index=index;
        $('.tab_area li').hide();
        $('.tab_area li').eq(index).show();
    }

    // 팝업창
    $('.photo_zoom ').on('click', function(e){
        var photo = $('.photo_zoom').index(this);
        var num = photo + 1;
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