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

new Chart(document.getElementById("graficoBarras"), {
    type: 'bar',
    data: {
      labels: ["2007", "2011", "2013", "2015", "2018"],
      datasets: [
        {
          label: "Número de proyectos realizados por año",
          backgroundColor: ["#5CB1F7","#5CB1F7","#5CB1F7","#5CB1F7","#5CB1F7"],
          data: [1,3,3,4,3]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Proyectos realizados por año'
      }
    }
});