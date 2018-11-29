// JavaScript Document


function agregarNoticia(titulo, contenido){
	"use strict";
	var title = $("<h5/>", {
	  "class": "col col-12 mt-3",
	  html: $("<h4/>",{
	  	html:titulo
	  })
	});

	var p = $("<div/>",{
	  "class": "col col-12",
	  html: $("<p/>",{
	  	html:contenido
	  })
	});

	var div = $( "<div/>", {
	  "class": "row"
	});

	title.appendTo(div);
	p.appendTo(div);
	div.appendTo( "#noticias" );
}

function cargarNoticias(texto) {
	"use strict";
	$.ajax({
		type: "GET",
		url: "../data/noticias.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('noticia').each(function(){
			var titulo = $(this).find('titulo').text();
			var contenido = $(this).find('contenido').text();
			if(texto.length===0){
				agregarNoticia(titulo, contenido);
			}
			else{
				if(titulo.includes(texto) || contenido.includes(texto)){
					agregarNoticia(titulo, contenido);
				}
			}
			});
		},
		error: function() {
		alert("Error al procesar el xml");
		}
	});
}

function datoBusqueda(){
	"use strict";
	var parameters=location.search.substring(1).split("&");
	var temp=parameters[0].split("=");
	var l=temp[1];
	return l;
}

$(document).ready(function(){
	"use strict";
	
	var texto=datoBusqueda().toString();
	cargarNoticias(texto);
});