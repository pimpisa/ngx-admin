import { Component, OnDestroy, ɵbypassSanitizationTrustResourceUrl} from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { chartData } from './chart-data';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ChartOptions, ChartType, ChartDataSets} from '../../../../../node_modules/chart.js';
//import {} from 'ng2-charts;



@Component({
  selector: 'ngx-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnDestroy  {
 
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      var dataStyle = { 
        normal: {
          color: function(params) {
              // build a color map as your need.
              var colorList = [
                '#75d6e8','#75d6e8'
              ];
              return colorList[params.dataIndex]
          },
          label: {
              show: true,
              position: 'right',
              formatter: '{b}\n{c}%',
              textStyle: {
                fontFamily: 'Arial',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'bold',
             },
        }
      }
        
      };
      this.options = {
        tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['leaderboard']
      },
     
      calculable : true,
      xAxis : [
          {
            show: false,
          }
      ],
      yAxis : [
          {
            type : 'category',
            data : ["Obj1", "Obj2", "Obj3", "Obj4", "Obj5"],
            axisLine: 5
          }
      ],
      series : [
          {
              name:'User score',
              type:'bar',
              data:[10,30,60,40,60],
              itemStyle: dataStyle 
                
              ,
            
          },
        
      ]
      };
      /*this.data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
            borderWidth: 0,
            data: [this.random(), this.random(), this.random(), this.random()],
          }, {
            label: 'Dataset 2',
            backgroundColor: colors.successLight,
            borderWidth: 0,
            data: [this.random(), this.random(), this.random(), this.random()],
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: ɵbypassSanitizationTrustResourceUrl,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              barPercentage: 1,
              barThickness: 20,
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };*/
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
