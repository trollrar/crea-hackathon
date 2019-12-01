import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-indicator',
  templateUrl: './score-indicator.component.html',
  styleUrls: ['./score-indicator.component.css']
})
export class ScoreIndicatorComponent implements OnInit {

  constructor() { }
  public graphOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    animation: false,
    scaledisplay: false,
    responsive: true,

    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  public graphLabels = ['0.20', '0.19', '0.18', '0.17', '0.16', '0.15', '0.14', '0.13', '0.12', '0.11', '0.10', '0.09'];
  public graphType = 'bar';
  public graphLegend = false;
  public graphData = [
    {data: [5, 6, 7, 9, 15, 20, 16, 9, 5, 4, 3, 1], label: 'Percent',
      backgroundColor: [
        'rgba(231, 76, 60, 0.6)',
        'rgba(231, 76, 60, 0.6)',
        'rgba(231, 76, 60, 0.6)',
        'rgba(231, 76, 60, 0.6)',
        'rgba(244, 208, 63, 0.6)',
        'rgba(244, 208, 63, 0.6)',
        'rgba(244, 208, 63, 0.6)',
        'rgba(244, 208, 63, 0.6)',
        'rgba(30, 132, 73 , 1)',
        'rgba(30, 132, 73 , 0.6)',
        'rgba(30, 132, 73 , 0.6)',
        'rgba(30, 132, 73 , 0.6)'
      ],
    },
  ];
  ngOnInit() {
  }

}
