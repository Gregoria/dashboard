$(document).ready(function(){

$("#minuto").click(function(e){
	    var objetoGrafica = {
      chart :{
        type: 'line',
      //       options3d: {
          // enabled: true,
          // alpha: 45
      //         }
      },
    title: {
            text: 'Gráfica por minuto',
            x: -20 //center
        },
        
        
        yAxis: {
            title: {
                text: 'Número de incidentes'
            },
            plotLines: [{
                value: 1000,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'incidentes',
            data: [ 
            
            0
            ]
        }]

    };//Objetografica

    $("#graficas").highcharts(objetoGrafica);
    var chart= $("#graficas").highcharts();
    
    // setInterval(
    function grafica(){
      $.get("http://conecta2uam.esy.es/OLHC/index.php/estadisticas/obtener_accidentes_minuto", function(data){
          var datos = $.parseJSON(data);
          chart.series[0].addPoint(Number(datos[0].accidentes));
        }); 

    }//, 2000
        // );
     setInterval(function(){ grafica()}, 3000);
});

$("#anio").click(function(e){

var objetoGrafica = {
      chart :{
        type: 'column'
      },
    title: {
            text: 'Gráfica por año',
            x: -20 //center
        },
        
        yAxis: {
            title: {
                text: 'Número de incidentes'
            },
            plotLines: [{
                value: 1000,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'incidentes',
            data: []
        }]

    };

    //$("#grafica_anio").highcharts(objetoGrafica);
    var chart= $("#graficas").highcharts();
    var arreglo = [];
    // setInterval(
    function grafica(){
      $.get("http://conecta2uam.esy.es/OLHC/index.php/estadisticas/obtener_accidentes_anio", function(data){
          var datos = $.parseJSON(data);
          for (var i = 0; i < datos.length; i++) {
            arreglo.push(datos[i].accidentes);
          }
          objetoGrafica.series[0].data = arreglo;
          $("#graficas").highcharts(objetoGrafica);
        }); 
    }
    grafica();



});

	
});
