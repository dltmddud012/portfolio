$(function(){
    $('#fullpage').fullpage({
		//options here
        sectionsColor: ['#525559', '#bfbfbf', '#525559', '#bfbfbf', '#525559', '#bfbfbf','#525559'],
        anchors: ['Home', 'ABOUT', 'WEB', 'MOBILE', 'RESPONSIVE', 'GRAPHIC' , 'CONTACT'],
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
        navigationPosition: 'right',
        afterLoad: function(anchorLink, index){
            console.log("현재 섹션은=" + index);
            if(index==7){
                alert("현재 포트폴리오의 마지막 부분입니다")
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("현재 슬라이더 번호는=" + slideIndex);
        },
	});
    
    $('.line').click(function(){
        $('.line').toggleClass('on');
        $('.m_menu').toggleClass('on');
    });
    $('.m_menu li').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
    
    });
   
});