import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from "chart.js";

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {

  constructor() { }



  public options = {
    borderColor: '#ffffff',

    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
          drawBorder: false
        }}],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }};

  public legend = true;
  public labels = ['12/03/2019', '12/03/2020', '12/03/2021', '12/03/2022','12/03/2023', '12/03/2024'];
  public datasets: ChartDataSets[] = [

    {
      label: "Savings gained",
      data: [0, 1231, 2462, 3693, 4924, 6155],
      backgroundColor: '#28B463'
    },
    {
      label: "Loses due to delayed repair",
      data: [0, 50, 50, 50, 50, 50, 50],
      backgroundColor: '#E34656'
    },
    {
      label: "Potential left",
      data: [6404,5173,3942,2711,1480, 200],
      backgroundColor: '#FFCD56'
    },];

  ngOnInit() {
  }

}
