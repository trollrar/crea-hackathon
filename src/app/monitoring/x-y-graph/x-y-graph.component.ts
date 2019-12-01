import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ChartDataSets} from "chart.js";

@Component({
  selector: 'app-x-y-graph',
  templateUrl: './x-y-graph.component.html',
  styleUrls: ['./x-y-graph.component.css']
})
export class XYGraphComponent implements OnInit {

  constructor() { }

  colors = ['#0D47A1','#880E4F','#004D40','#4A148C','#311B92','#311B92','#B71C1C','#01579B','#006064','#1B5E20','#33691E','#F9A825','#E65100','#BF360C'];
  graphData = [[2,3,4,5,6,3,4,5,3,5,3,4,5,4,5,3,5,3,4,4,5,3]];

  public options = {
    responsive: true,
    maintainAspectRatio: false,
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
  @ViewChild('chart', {static: true}) canvas: ElementRef;
  public chart: CanvasRenderingContext2D;
  public legend = false;
  public labels = ['00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00'  ];
  public dataset: ChartDataSets[] = [
  ];





  ngOnInit() {
    this.chart = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

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
