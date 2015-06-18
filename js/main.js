var myAutobg = document.getElementById('bgaudio');
var myAuto = document.getElementById('myaudio');
function changeText(s,cont2,speed){
	var Otext=s;
	var Ocontent=Otext.split("");
	var i=0;
	function show(){
		if(i<Ocontent.length)
		{		
			if(i ==10){
			cont2.append("<br>");	
			}
			if(i == 20){
			cont2.append("<br>");	
			}
			if(i == 31){
			cont2.append("<br><br>");	
			}
			if(i == 39){
			cont2.append("<br>");	
			}
			if(i == 53){
			cont2.append("<br>");	
			}
			cont2.append(Ocontent[i]);
			i=i+1;
		};
	};
	Otimer=setInterval(show,speed);
}
function s2show(){
	$(".s1").removeClass("active");
	$(".s2").addClass("active");
}
function load(){
	myAutobg.play();
	var s = "辽宁铁岭、河南商丘、广东茂名、广西百色、江西抚州、四川雅安……2015年初夏，288个小时，20798公里用图片记录下乡村儿童的读书愿望"
	var Otimer;
	//changeText(s,$("#s1-t1"),150);
	//clearInterval(Otimer);
	setTimeout(s2show,3000);
}
function s3show(){
	myAutobg.play();
	$(".s2").removeClass("active");
	$(".s3-1").addClass("active");
}
//照片翻页
$("#s2-img2").on("click",function(){
	myAutobg.pause();
	myAuto.play();
	$(".s2").css("background","#fff");
	$("#s2-img2").hide();
	setTimeout(s3show,500);
});
$("#s3-img4").on("click",function(){
	$(".s3-1").removeClass("active");
	$(".s3-2").addClass("active");
})
$("#s3-img8").on("click",function(){
	$(".s3-2").removeClass("active");
	$(".s3-3").addClass("active");
})
$("#s3-img12").on("click",function(){
	$(".s3-3").removeClass("active");
	$(".s3-4").addClass("active");
})
$("#s3-img16").on("click",function(){
	$(".s3-4").removeClass("active");
	$(".s3-5").addClass("active");
})
$("#s3-img20").on("click",function(){
	$(".s3-5").removeClass("active");
	$(".s3-6").addClass("active");
})
$("#s3-img24").on("click",function(){
	$(".s3-6").removeClass("active");
	$(".s4").addClass("active");
})
//弹出照片详情
$("#s3-img1").on("click",function(){
	$("#layer3-1").addClass("active");
})
$("#s3-img2").on("click",function(){
	$("#layer3-2").addClass("active");
})
$("#s3-img3").on("click",function(){
	$("#layer3-3").addClass("active");
})
$("#s3-img5").on("click",function(){
	$("#layer3-5").addClass("active");
})
$("#s3-img6").on("click",function(){
	$("#layer3-6").addClass("active");
})
$("#s3-img7").on("click",function(){
	$("#layer3-7").addClass("active");
})
$("#s3-img9").on("click",function(){
	$("#layer3-9").addClass("active");
})
$("#s3-img10").on("click",function(){
	$("#layer3-10").addClass("active");
})
$("#s3-img11").on("click",function(){
	$("#layer3-11").addClass("active");
})
$("#s3-img13").on("click",function(){
	$("#layer3-13").addClass("active");
})
$("#s3-img14").on("click",function(){
	$("#layer3-14").addClass("active");
})
$("#s3-img15").on("click",function(){
	$("#layer3-15").addClass("active");
})
$("#s3-img17").on("click",function(){
	$("#layer3-17").addClass("active");
})
$("#s3-img18").on("click",function(){
	$("#layer3-18").addClass("active");
})
$("#s3-img19").on("click",function(){
	$("#layer3-19").addClass("active");
})
$("#s3-img21").on("click",function(){
	$("#layer3-21").addClass("active");
})
$("#s3-img22").on("click",function(){
	$("#layer3-22").addClass("active");
})
$("#s3-img23").on("click",function(){
	$("#layer3-23").addClass("active");
})
$(".layer-img2").on("click",function(){
	$(".layer").removeClass("active");
	$("#layer3-7").removeClass("active");
})
$(".s4").on("click",function(){
	$(this).removeClass("active");
	$(".s5").addClass("active");
})
$("#s5-img3").on("click",function(){
	window.location.href = "http://www.baidu.com/";
})

$(function(){
	$(".layer").height($(window).width());
	$(".layer").width($(window).height());
	$("#layer3-7").height($(window).height());
	$("#layer3-7").width($(window).width());
	
})
