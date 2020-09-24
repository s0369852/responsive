'use strict';

// sns 공유하기
    // 공유하기 버튼의 기본 원리 (버튼을 클릭했을 때 윈도우 창이 열린다.)
    //http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
    //http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
    //https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
    //https://plus.google.com/share?url={페이지링크}&t={페이지 제목}
    
    $(".facebook").click(function(e){
        e.preventDefault();
        window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=500, width=600'); 
    });
    $(".twitter").click(function(e){
        e.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=500, width=600');
    });

    // 공유하기 버튼을 따로 넣어준 이유는 head태그에 script defer로 넣고 직접 입력했을때, 클래스가(.facebook, .twitter) 정해지기 이전이므로 선택자를 인식하지를 못한다.
    // 그래서 따로 main.js 파일을 만들어 넣어준 것. (html파일에 입력하고 싶다면 body태그의 하단 부분에 script를 입력해주면 된다.)

// 전체 메뉴(접기, 펼치기)
    $(".btn").click(function(e){
        e.preventDefault();
        $(".nav").slideToggle();
        $(".btn").toggleClass("open");
        
        if( $(".btn").hasClass("open") ){
            // "open"이란 클래스가 있을 때 
            $(".btn").find("i").attr("class","fa fa-angle-up");
            // .attr은 속성을 가져올 수도 있고, 변경할 수도 있다.
        } else {
            // "open"이란 클래스가 없을 때
            $(".btn").find("i").attr("class","fa fa-angle-down");
        }
    });

    $(window).resize(function(){
        let wWidth = $(window).width();
        if(wWidth > 600){
            $(".nav").removeAttr("style");
        }
    });
    // 전체 메뉴 접고 펼치기를 스크립트로 작업을 해줬기 때문에 display: block상태가 유지가 된다. 
    // css에는 이미 display: none이라고 되어있지만, 우선순위로 인해서 보이는 상태가 유지되는데,
    // 이것을 바꿔주려면 다시 스크립트로 작업을 해야한다.
    // 그래서 .resize로 함수를 만들었다.
    // 윈도우(브라우저)의 너비가 600보다 작게되면 style(속성)을 지우는 함수이다.



// 이미지 슬라이더
    $(".slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false
                }
            }
        ]
    });

// 라이트 박스
    $(".lightbox").lightGallery({
    });

