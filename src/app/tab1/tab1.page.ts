import { Component } from '@angular/core';

declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}


  showChartSuenoMiDia () {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Sueño profundo', 3],
      ['Sueño ligero', 1],
      
    ]);
  
    // Set chart options
    var options = {'Sueño profundo':4,
                   'Sueño ligero':3},
    pieHole: 0.4;
  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_SuenoMiDia'));
        chart.draw(data, options);
   
    }




 /*
    
  showChartSuenoMiDia () {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Sueño');
    data.addColumn('number', 'Horas');
    data.addRows([
      ['Sueño ligero', 3],
      ['Sueño profundo', 4],
    ]);
  
    // Set chart options
    var options = {
                   'Sueño profundo':4,
                   'Sueño ligero':3};
  
    // Instantiate and draw our chart, passing in some options.
    
    var chart = new google.visualization.PieChart(document.getElementById('chart_SuenoMiDia'));
    chart.draw(data, options);
    */
  


}
