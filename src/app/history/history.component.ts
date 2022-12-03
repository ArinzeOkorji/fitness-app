import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        border: {
          display: false
        },
        grid: {
              color: '#fff',
            },
      },
      y: {
        display: false,
      }
    },

    plugins: {
      legend: { display: false },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         display: true,
      //         position: 'center',
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold'
      //         }
      //       }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartData<'line'> = {
    labels: [ 'T', 'W', 'T', 'F', 'S', 'S', 'M' ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: '',
        backgroundColor: '#7B66FF',
        borderColor: '#C3FF4D',
        pointBackgroundColor: '#7B66FF'
      },
    ]
  };


  public barChartType: ChartType = 'bar';

  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        border: {
          display: false
        },
        grid: {
          display: false
        },
        min: 2
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
  public pressureBarChartData: ChartData<'bar'> = {
    labels: [ 'T', 'W', 'T', 'F', 'S', 'S', 'M' ],
    datasets: [
      { data: [ 10, 9, 8, 3, 4, 7, 5 ],
        label: '',
        backgroundColor: '#C3FF4D',
        borderColor: 'red',
        borderRadius: 50,
        barThickness: 7
       }
    ]
  };
  
  public sleepBarChartData: ChartData<'bar'> = {
    labels: [ 'T', 'W', 'T', 'F', 'S', 'S', 'M' ],
    datasets: [
      { data: [ 10, 9, 8, 3, 4, 7, 5 ],
        label: '',
        backgroundColor: '#7B66FF',
        borderColor: 'red',
        borderRadius: 50,
        barThickness: 7
       }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
