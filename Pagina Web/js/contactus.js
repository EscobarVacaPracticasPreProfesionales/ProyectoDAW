// JavaScript Document
function init_map(){
	"use strict";
	var myOptions = {zoom:16,center:new google.maps.LatLng(-2.2143109,-79.88885909999999),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('map'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-2.2143109,-79.88885909999999)});infowindow = new google.maps.InfoWindow({content:'<strong>HIS Sistemas</strong><br>Chimborazo 3216 entre Vacas Galindo y Cañar<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);
}


init_map();