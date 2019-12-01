import {Component, ElementRef, OnInit} from '@angular/core';
import {ChartDataSets} from "chart.js";

@Component({
  selector: 'app-trend-graph',
  templateUrl: './trend-graph.component.html',
  styleUrls: ['./trend-graph.component.css']
})
export class TrendGraphComponent implements OnInit {

  constructor() { }
  colors = ['#1B5E20','#880E4F','#004D40','#311B92','#E65100','#0D47A1','#4A148C','#311B92','#B71C1C','#01579B','#006064','#33691E','#F9A825','#BF360C'];
  graphData = [[10648,10398,9653,10014,11201,10836,10836,17532,12674,10432,11792,0]];

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
    tooltips: {
      mode: 'index',
      intersect: false
    },
  };

 // @ViewChild('chart', {static: true}) canvas: ElementRef;
  public chart: CanvasRenderingContext2D;
  public legend = false;
  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  public dataset: ChartDataSets[] = [
  ];





  ngOnInit() {
    //this.chart = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

    for (let i in this.graphData) {

      let data: ChartDataSets = {
        label: "Number of users",
        backgroundColor: '#00000000',
        pointBackgroundColor: '#00000000',
        pointBorderColor:'#00000000' ,
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
