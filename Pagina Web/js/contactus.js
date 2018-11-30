// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("#contactform").validate({
		rules:{
			name:{
				required:true,
				minLenght:3
			},
			tel:{
				required:true,
				minLenght:10,
				tel:true
			},
			email:{
				required:true,
				email:true
			}
		},
		messages:{
			name:"Ingresa tu nombre completo",
			tel:{
				required: "Ingresa tu número celular de contacto",
				minLenght:"No es un número válido"
			},
			email:"Ingresa su correo electrónico"
		}
	});
});