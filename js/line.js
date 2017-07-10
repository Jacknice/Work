var windowwidth = window.innerWidth;

function set(id, v1, v2) {
	var dom = document.getElementById(id);
	dom.style.height = windowwidth / v1 + "px";
	dom.style.width = windowwidth / v2 + "px";
}
set('tree', 1.9258, 1);
set("head", 1.9257, 1);
set("logo", 28.23, 6.09);
set("qiqiu", 7.13, 2.07);
set("car", 9.648, 2.696);
set("flow1", 8.888, 3.991);
set("flow2", 7.529, 4.8);
set("flow2", 7.529, 4.8);
set("flow3", 4.05, 3.91);
set("flow4", 5.26, 8.458);
set("flow5", 6.254, 3.643);
set("flow6", 7.3, 5.944);
set("flow7", 9.365, 3.779);
set("flow8", 7.966, 5.981);
set("flow9", 9.648, 4.393);
set("flow10", 9.275, 4.192);
set("flow11", 6.9, 5.944);
set("flow12", 6.018, 3.132);
set("flow13", 7.272, 5.647);
set("flow14", 7.804, 5.962);

set("b1", 13.150, 23.132);
set("b2", 13.150, 23.132);
set("b3", 13.061, 22.857);
set("b4", 13.150, 23.414);
set("b5", 13.241, 23.703);
set("b6", 13.150, 23.414);
set("b7", 13.241, 23.414);
set("b8", 13.241, 23.414);
set("b9", 13.241, 23.414);
set("b10", 13.241, 23.414);
set("b11", 13.241, 23.414);
set("b12", 13.241, 23.414);
set("b13", 12.972, 23.414);
set("b14", 13.150, 23.132);

set("circle1", 14.769, 14.769);
set("circle2", 14.769, 14.769);
set("circle3", 14.769, 14.769);
set("circle4", 14.769, 14.769);
set("circle5", 14.769, 14.769);
set("circle6", 14.769, 14.769);
set("contion", 1.957, 1);

set("img1", 3.817, 1);
set("img2", 3.817, 1);

set("g_btn", 20.645, 6.274);

set("step1", 2.832, 1);
set("step2", 2.880, 1);
set("step3", 2.864, 1);
set("step4", 2.834, 1);
set("step5", 2.831, 1);
set("step6", 2.85, 1);
set("step7", 4.585, 1);

$(document).ready(function () {
	$("[class^='flow']").css("z-index",-5);
	$("#g_btn").css("line-height",windowwidth/20.645+"px");
	$("#logo").mousemove(function(){
		$(this).addClass("fadeIn");
	});
	setTimeout(function(){$("#qiqiu").css("z-index",100).addClass("rubberBand")},500);
	setTimeout(function(){$("#car").css("z-index",100).addClass("shake")},1500);
    $(window).scroll(function () {
          switch ($(window).scrollTop()){
			case 300 :$("#flow1").css("z-index",100).addClass("bounceInRight");break;
			case 500: $("#flow2").css("z-index",100).addClass("bounceInLeft");break;
			case 700: $("#flow3").css("z-index",100).addClass("bounceInDown");break;
			case 900: $("#flow4").css("z-index",100).addClass("bounceInUp");break;
			case 1100: $("#flow5").css("z-index",100).addClass("fadeInLeftBig");break;
			case 1300: $("#flow6").css("z-index",100).addClass("fadeInRightBig");break;
			case 1500: $("#flow7").css("z-index",100).addClass("rollIn");break;
			case 1700: $("#flow8").css("z-index",100).addClass("lightSpeedIn");break;
			case 1900: $("#flow9").css("z-index",100).addClass("wobble");break;
			case 2200: $("#flow10").css("z-index",100).addClass("lightSpeedIn");break;
			case 2400: $("#flow11").css("z-index",100).addClass("tada");break;
			case 2600: $("#flow12").css("z-index",100).addClass("bounce");break;
			case 2800: $("#flow13").css("z-index",100).addClass("rotateIn");break;
			case 3000: $("#flow14").css("z-index",100).addClass("rotateInDownRight");break;
			case 3200: $(".g_btn").addClass("tada");break;
			break;
		}
    });
});