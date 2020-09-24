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
