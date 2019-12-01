import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets} from "chart.js";

@Component({
  selector: 'app-specific-power-graph',
  templateUrl: './specific-power-graph.component.html',
  styleUrls: ['./specific-power-graph.component.css']
})
export class SpecificPowerGraphComponent implements OnInit {

  constructor() { }

  colors = ['#B71C1C','#880E4F','#004D40','#311B92','#01579B','#0D47A1','#4A148C','#311B92','#006064','#1B5E20','#33691E','#F9A825','#E65100','#BF360C'];
  graphData = [[130,135,129,123,127,138,124,120,136,132,127,135,129,130,124,120,135,129,130,135,129,123,127,138,124,120,136,132,127,135,129,130,124,120,135,129,129,130,124,120,135,129,130,135,124,120,136,132,127,135,129,130,124,120,135,]];

  public options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: true
    },
    point: {
      borderColor: 'white',
      backgroundColor: this.colors[0]
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  //@ViewChild('chart', {static: true}) canvas: ElementRef;
  public chart: CanvasRenderingContext2D;
  public legend = false;
  public labels = ['8:00:00','08:10:00','08:20:00','08:30:00','08:40:00','08:50:00','09:00:00','09:10:00','09:20:00','09:30:00','09:40:00','09:50:00','10:00:00','10:10:00','10:20:00','10:30:00','10:30:00','10:40:00', '10:50:00', '11:00:00'  ];
  public dataset: ChartDataSets[] = [
  ];





  ngOnInit() {
    //this.chart = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

    for (let i in this.graphData) {

      /*let gradient = this.chart.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, this.colors[i] + "66");
      gradient.addColorStop(0.5, this.colors[i] + "33");
      gradient.addColorStop(1, this.colors[i] + "0D");*/

      let data: ChartDataSets = {
        label: "Number of users",
        backgroundColor: '#FFFFFF00',
        pointBackgroundColor: '#FFFFFF00',
        pointBorderColor:'#FFFFFF00' ,
        pointHoverBackgroundColor: this.colors[i],
        pointHoverBorderColor: 'white',
        hoverBackgroundColor: 'white',
        borderWidth: 2,
        borderColor: this.colors[i],
        data: this.graphData[i],
      };
      this.dataset.push(data);
    }
  }
}
