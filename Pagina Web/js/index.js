// JavaScript Document
var slidesIndex=0;
showSlides();

function showSlides(){
	"use strict";
	
	var slides=document.getElementsByClassName("producto");
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