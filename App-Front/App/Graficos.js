const inputDateRange = document.querySelector("[data-rangeDate]");
const buttonGenerateGrafic = document.querySelector("[data-graficButton]");
const graficZone = document.querySelector("[data-graficZone]");

   google.charts.load('43', {packages: ['corechart']});
   buttonGenerateGrafic.addEventListener("click", colocarGrafico )


function colocarGrafico(){
    google.charts.setOnLoadCallback(getInfosGrafico(inputDateRange.value))
   

   }


function getInfosGrafico(inputDateRangeValue){
  console.log(inputDateRangeValue)
    const url = `http://ec2-3-83-114-176.compute-1.amazonaws.com:8080/Financas/?data=${inputDateRangeValue}`;
     
    
    fetch(url , {method: "GET"})
    .then((response)=>{return response.json()})
    .then((object) => {
      
      
    const response = object.reduce((acc, {destino,valor}) => {
      const Destino = String(destino).toLowerCase();
      acc[Destino] = acc[Destino] ? acc[Destino] + valor : valor ; 
      return acc
    }, {})

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows(Object.entries(response))
  // Set chart options
  const title = "Graficos referente a data : " + inputDateRangeValue;
  var options = {'title':title,
  'width':600,
  'height':300};

  var chart = new google.visualization.PieChart(graficZone);
  chart.draw(data, options);
  
  })
   
}








