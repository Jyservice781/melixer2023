$(function(){

//헤더 부분 애니메이션
    $(window).scroll(function(){
        if($(this).scrollTop( ) > 0){
            $('header').addClass('slicky');
        }else{
            $('header').removeClass('slicky')
        };


        if($(this).scrollTop( ) >= 1000){
            $('.l_text').addClass('active');
            $('.sub_img').addClass('active');
        }else{
            $('.l_text').removeClass('active');
            $('.sub_img').removeClass('active');
        };


        if($(this).scrollTop( ) >= 1500){
            $('.r_text').addClass('active2');
            $('.lst_b_img').addClass('active2');
            $('.last_ban>p').addClass('active2');
        }else{
            $('.r_text').removeClass('active2');
            $('.lst_b_img').removeClass('active2');
            $('.last_ban>p').removeClass('active2');
        };
    });//scroll

});//doc