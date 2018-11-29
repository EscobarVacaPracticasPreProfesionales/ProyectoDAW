// JavaScript Document
var slidesIndex=0;

function showSlides(){
	"use strict";
	
	var slides=document.querySelectorAll("div[id^=producto]");
	for(var i=0;i<slides.length;i++){
		slides[i].classList.add("d-none");
	}
	slidesIndex++;
	if(slidesIndex>slides.length-1){
		slidesIndex=0;
	}
	slides[slidesIndex].classList.remove("d-none");
	setTimeout(showSlides,2500);
}

$(document).ready(function(){
	"use strict";
	showSlides();
});