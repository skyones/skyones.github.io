/* 상단 고정 */
function topFixed(){
    var winST = $(window).scrollTop();
    if(winST > 50 ){
        $(".body_wrap").addClass("top_fixed2");
    } else {
        $(".body_wrap").removeClass("top_fixed2");
    }
}

/* 탑으로 이동 버튼 보이기 */
function goTopShow(){
    var winST = $(window).scrollTop();
    var winH = $(window).height();
    if(winST > winH){
        $(".go_top").addClass("show");
    } else {
        $(".go_top").removeClass("show")
    }
}

/* sns 공유 설정 */
function snsShare(snsName, link) {
	if (snsName === null) return false;

	var snsPopUp;
	var _width = '600';
	var _height = '450';
	var _left = Math.ceil(( window.screen.width - _width )/2);
	var _top = Math.ceil(( window.screen.height - _height )/2);


	var linkUrl;
	if(link=="") linkUrl = window.location.href; //링크 주소를 적지 않으면, 현재 페이지의 주소 적용
	else linkUrl = link; 

	switch(snsName){
		case 'facebook':
			snsPopUp = window.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(linkUrl), '', 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top);
			break;

		case 'twitter' :
			snsPopUp = window.open("http://twitter.com/intent/tweet?url=" + encodeURIComponent(linkUrl), '', 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top);
			break;

		case 'linkedin' :
			snsPopUp = window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(linkUrl), '', 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top);
			break;
	}

}
function urlCopy(link){
    var linkUrl;
    if(link=="") linkUrl = window.location.href; //링크 주소를 적지 않으면, 현재 페이지의 주소 적용
    else linkUrl = link;

    var $input = $("#url_copy");
    $input.val(linkUrl);
    // console.log($input.val());
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        var el = $input.get(0);
        var editable = el.contentEditable;
        var readOnly = el.readOnly;
        el.contentEditable = 'true';
        el.readOnly = 'false';
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        el.setSelectionRange(0, 999999);
        el.contentEditable = editable;
        el.readOnly = readOnly;
    } else {
        $input.select();
    }
    document.execCommand('copy');
    $input.blur();
    
    alert("URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.");
   
}



$(document).ready(function(){
    topFixed();
    goTopShow();
   
    $(window).scroll(function(){
        topFixed();
        goTopShow();
    });

    //모바일용 사이드 메뉴
    $(".btn_menu").on("click", function(){
        $(".gnb_m_bg").fadeIn("fast");
        $(".gnb_m_wrap").addClass("open");
    });
    $(".close_menu").on("click", function(){
        $(".gnb_m_bg").fadeOut("fast");
        $(".gnb_m_wrap").removeClass("open");
    });
    $(".gnb_m_bg").on("click", function(){
        $(".gnb_m_bg").fadeOut("fast");
        $(".gnb_m_wrap").removeClass("open");
    });
    $(".gnb_m_wrap").on("click", function(){
        event.stopPropagation();
    });

    //한줄 뉴스
    if($(".oneline_news li").length > 1){
        var onelineSwiper = new Swiper(".oneline_conts", {
            speed: 1000,
            direction: "vertical",
            loop: true,
            autoplay: {
                delay : 3000,
            },
        });
    } else {
        return;
    }
    $(".close_oneline").on("click", function(){
        $(".oneline_wrap").slideUp("fast");
        setTimeout(function(){
            $(".body_wrap").addClass("top_fixed1")
        }, 300);
        
    })

    //탑으로 이동 버튼
    $(".go_top").on("click", function(){
        $("html, body").animate({ scrollTop : 0}, 400);
	    return false;
    })
    
    
})
