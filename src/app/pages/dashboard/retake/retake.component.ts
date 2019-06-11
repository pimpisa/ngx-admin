import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ChartService } from '../../../services/chart.service';

@Component({
  selector: 'ngx-retake',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
  styleUrls: ['./retake.component.scss']
})
export class RetakeComponent implements OnDestroy {

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
                '#9fbeff','#75d6e8'
              ];
              return colorList[params.dataIndex]
          },
          label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}%',
              textStyle: {
                fontFamily: 'Arial',
                fontSize: 18,
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
            type : 'category',
            data : ["data1", "data2"],
            axisLine: 5
          }
      ],
      yAxis : [
          {
            show: false,
          }
      ],
      series : [
          {
              name:'User score',
              type:'bar',
              data:[10,30],
              itemStyle: dataStyle 
                
              ,
            
          },
        
      ]
      };
     
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
