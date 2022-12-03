import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexDataLabels
} from "ng-apexcharts";
// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.scss']
})
export class MyActivityComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          
        },
        ticks: {
          color: "#fff"
        }
      },
      y: {
        border: {
          display: false,
          dash: [5, 10]
        },
        grid: {
          color: (context) => {
            if(context.tick.value === 8) {
              return '#c5c5c5'
            } else {
              return 'transparent'
            }
          },
        },
        min: 2,
        ticks: {
          color: "#fff"
        }
      },
    },
    layout: {
      padding: {
        top: 30,
        left: 20,
        right: 20,
        bottom: 10
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['T', 'W', 'T', 'F', 'S', 'S', 'M'],
    datasets: [
      {
        data: [10, 9, 8, 3, 4, 7, 5],
        label: '',
        backgroundColor: '#C3FF4D',
        borderRadius: 50,
        barThickness: 13
      }
    ]
  };

}
