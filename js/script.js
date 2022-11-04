$(document).ready(function(){
    var idx = 0;
   
    // 탭 메뉴 전환
    $('.tab_btns').find("li").on('click', function(e){
        e.preventDefault();
        // var me = $(e.currentTarget);
        var me = $(this).index();
            idx = me;
        console.log(idx);
        $('.tab_btns li').removeClass('active');
        $(this).addClass('active');
        viewItem(idx);
    });

    // 탭메뉴 좌/우 이동
    // $('.next a').on('click', function(e){
    //     e.preventDefault();
    //     idx++ ;
    //     if (idx > $(".tab_btns li").length - 1){
    //         idx = $(".tab_btns li").length - 1
    //     }
    //     console.log(idx);
    //     Indigate(idx);
    //     viewItem(idx);
    // });
    // $('.prev a').on('click', function(e){
    //     e.preventDefault();
    //     idx-- ;
    //     if (idx < 0){
    //         idx = 0
    //     }
    //     console.log(idx);
    //     Indigate(idx);
    //     viewItem(idx);
    // });

    // 탭메뉴 루프
    $('.next').on('click', function(e){
        e.preventDefault();
        idx++ ;
        if (idx > $(".tab_btns li").length - 1){
            idx = 0;            
        }
        console.log(idx);
        Indigate(idx);
        viewItem(idx);
    });
    $('.prev').on('click', function(e){
        e.preventDefault();
        idx-- ;
        if (idx < 0){
            idx = $(".tab_btns li").length - 1;
        }
        console.log(idx);
        Indigate(idx);
        viewItem(idx);
    });
    
    function Indigate(idx){
        var idx=idx;
        $('.tab_btns li').removeClass('active');
        $('.tab_btns li').eq(idx).addClass('active');
    }
    function viewItem(idx){
        var idx=idx;
        $('.tab_area li').hide();
        $('.tab_area li').eq(idx).show();
    }

    // 팝업창
    $('.photo_zoom ').on('click', function(e){
		e.preventDefault();

        var photo = $('.photo_zoom').index(this);
        var num = photo + 1;
        $(".popup").show(100);
        $(".popup_wrap figure img").remove();
		$(".popup_wrap figure").prepend('<img src="images/img_EDMS_func_' + num + '_big.jpg" alt="' + num + '번째 탭 내용 큰 이미지">');
    });
    $('.popup_close').on('click', function(e){
		e.preventDefault();
        $(".popup").hide(100);
    })
});