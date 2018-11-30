function myFunction(x) {
    if (x.matches) {
    	
        var imagen = document.getElementsByClassName("imgHoverPar");
        var i;
        for (i = 0; i < imagen.length; i++) {
    		var padre = imagen[i].parentNode;
    		padre.insertBefore(imagen[i],padre.firstChild);
		}
		
    }
    else{
    	
        var info = document.getElementsByClassName("infoPar");
        var i;
        for (i = 0; i < info.length; i++) {
    		var padre = info[i].parentNode;
    		padre.insertBefore(info[i],padre.firstChild);
		}

    }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) 
x.addListener(myFunction) 