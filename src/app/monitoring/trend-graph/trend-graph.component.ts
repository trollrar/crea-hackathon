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
  graphData = [[100,110,100,100,40,2,4,3,7,3,4,5,3,4,5,3,4,5,100,110,111,110,111],[1,2,10,20,1,2,10,20,3,2,4,30,20,2,3,4,5,10,20,10,23,1,2],[60,50,45,46,76,46,53,64,64,46,34,35,46,75,43,43,23,35,65,45,67]];

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
  public labels = ['00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00','00:30:00'  ];
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
