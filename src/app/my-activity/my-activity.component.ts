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
  caloriesBurned = 0;
  steps = 0;
  dataThreshold = 8;
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
            if(context.tick.value === this.dataThreshold) {
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
    const caloriesBuurnedIncrement = setInterval(
      () => {
        if(this.caloriesBurned !== 866) {
          this.caloriesBurned++;
          if(this.caloriesBurned === 150) {
            this.caloriesBurned = 866
          }
        } else {
          clearInterval(caloriesBuurnedIncrement)
          
        }
      },
      0.0000000000000001
    )
    const stepsIncrement = setInterval(
      () => {
        if(this.steps !== 7579) {
          this.steps++;
          if(this.steps === 150) {
            this.steps = 7579
          }
        } else {
          clearInterval(stepsIncrement)
          
        }
      },
      0.0000000000000001
    )

    this.data.forEach(datum => {
      if(datum > this.dataThreshold) {
        this.barColors.push('#C3FF4D')
      } else {
        this.barColors.push('#a99df9')
      }
    })
  }

  public barChartType: ChartType = 'bar';

  data = [9.9, 9, 5, 7, 8.5, 4, 6];
  barColors: string[] = [];

  public barChartData: ChartData<'bar'> = {
    labels: ['T', 'W', 'T', 'F', 'S', 'S', 'M'],
    datasets: [
      {
        data: this.data,
        label: '',
        backgroundColor: this.barColors,
        borderRadius: 50,
        barThickness: 13
      }
    ]
  };

}
