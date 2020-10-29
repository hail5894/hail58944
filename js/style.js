
//조커부인
$(function () {
    //start

    $(document).ready(function () {
        //슈퍼맨 커져라
        $('.superman img').animate({
            width: '100%'
        }, 4000);

        //글씨 옆으로 나와라
        $('.dc_font .dc_font_1 p').eq(0).animate({
            left: '0%'
        }, 1000, function () {
            $('.dc_font .dc_font_1 p').eq(1).animate({
                left: '0%'
            }, 1000, function () {
                $('.dc_font .dc_font_1 p').eq(2).animate({
                    left: '0%'
                }, 1000);
            });
        });
    });



    var top;
    function nav(e) {
        //1
        top = $(window).scrollTop();
        if ($('.dcm2_mid').offset().top - 200 < top) {

            $('main .dc .dc1 .container .dc_main3 div .ba').animate({
                top: '-10%',
                left: '140%'
            }, 2000);
            $('.dc_main3_1').show();
        }


        if ($('.left').offset().top - 200 < top) {
            $('.bg_bar').show();
        }
        //2
        if($('.dc_tit2').offset().top-100< top){
            
            $('.left p').eq(0).animate({
                left: '0%'
            }, 1000, function () {
                $('.left p').eq(1).animate({
                    left: '0%'
                }, 1000, function () {
                    $('.left p').eq(2).animate({
                        left: '0%'
                    }, 1000,function(){
                        $('.left p').eq(3).animate({
                            left: '0%'
                        }, 1000);
                    });
                });
            });   
        }

        //3
        if($('.dc2_2').offset().top-200< top){
            
            $('.dc3_1 .fl div p').eq(0).animate({
                left: '0%'
            }, 1000, function () {
                $('.dc3_1 .fl div p').eq(1).animate({
                    left: '0%'
                }, 1000, function () {
                    $('.dc3_1 .fl div p').eq(2).animate({
                        left: '0%'
                    }, 1000,function(){
                        $('.dc3_1 .fl div p').eq(3).animate({
                            left: '0%'
                        }, 1000);
                    });
                });
            });   
        }



        //end 
    }

    $(window).on('scroll', nav);



});



//news_area -아래에서 소식 튀어나오는거 
window.addEventListener('DOMContentLoaded', function () {

    //  1. 콘텐츠 상단 위치값
    var liEle = document.querySelectorAll('.news_area');
    window.addEventListener('scroll', fadeFun);
    var winH = window.innerHeight / 2;

    liEle[0].classList.add('active');

    function fadeFun() {
        liEle.forEach(function (el, idx) {
            if (el.offsetTop - winH < this.scrollY) {
                //  console.log(el.offsetTop);
                el.classList.add('active');
            }

        });
        //offsetTop 0부터 li top까지의 거리 1이나 2나 무조건 0부터
        //브라우저 크기만큼만 알아서 offsetTop에서 빼준다
    }
});

//slick
$(function () {
    $('.s_v1').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        //눈으로 보이는 슬라이드 개수
        slidesToScroll: 1,
        //버튼 누를때 바뀌는 슬라이드 개수 (한칸씩이동)
        autoplay: true,
        autoplaySpeed: 2000,

    })

});


//3
window.addEventListener('DOMContentLoaded', function () {
    //start
    var navEl = document.querySelectorAll('.header nav a');
    var secEl = document.querySelectorAll('.secEl');


    //수치를 미리 싹 받아놓고 담아놓는 방법
    var secArr = [];
    setTimeout(function () {
        secEl.forEach(function (sl, idx) {
            secArr.push(sl.offsetTop);
        });
    }, 500);
    navEl[0].classList.add('active');
    //  console.log(secArr); secArr에 담아놈 push가 담아놓는거야
    navEl.forEach(function (sl, idx) {
        sl.addEventListener('click', function (e) {
            e.preventDefault();
            //var a = secEl[idx].offsetTop;
            var a = secArr[idx];

            window.scrollTo(0, a);

        });

    });

    window.addEventListener('scroll', scroll_11);
    var winH = window.innerHeight / 2;
    //이게 반절임 

    function scroll_11() {
        secArr.forEach(function (el, idx) {
            //반절만 쪼끔만 지나가도 불이 들어올거임
            if (window.scrollY >= secArr[idx]) {
                navEl.forEach(function (a, i) {
                    // navEl[i].classList.remove('active');
                    a.classList.remove('active');
                });

                navEl[idx].classList.add('active');

            }
        });
    }
    //end   
});

//클릭 광고
$(function () {
    // $('.people_cf').on('click',function(e){
    //     e.preventDefault();
    //     var index= $(this).index();
    //     $('.pop_bg').eq(index).show();
    //     $('body').addClass('active');

    //     $('.x').on('click',function(e){
    //         e.preventDefault();
    //         $('.pop_bg').eq(index).hide();
    //         $('body').removeClass('active');
    //     });
    // });
    $('.people_cf').on('click',function(e){
        e.preventDefault();
        var index= $(this).index();
        $('.pop_bg').show();
        if(index==0){
            $('.pop_bg iframe').eq(0).show();
            $('.pop_bg iframe').eq(1).hide();
        }else if(index ==1){
            $('.pop_bg iframe').eq(1).show();
            $('.pop_bg iframe').eq(0).hide(); 
        }
     

        $('body').addClass('active');
    });
       $('.x').on('click',function(e){
            e.preventDefault();
            $('.pop_bg').hide();
    
            $('body').removeClass('active');
        });
  
});

