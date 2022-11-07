$(document).ready(function(){
    // 탭 메뉴 전환
    $('.tab').find("li").on('click', function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});