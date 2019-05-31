import { AfterViewInit, Component, OnDestroy, AfterContentInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartOptions, ChartType, ChartDataSets} from '../../../../../node_modules/chart.js';
import * as echarts from 'echarts';

@Component({
  selector: 'ngx-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.scss']
})
export class FunnelComponent implements AfterViewInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  
  constructor(private theme: NbThemeService) {
  }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      var dataStyle = { 
        normal: {
            label : {
                show: true,
                position: 'insideLeft',
                formatter: "{c} {b}"
            }
        }
      };

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      legend: {
        data : ['learners accessed the platform','entered the module','began the game','finished the game','requested credit'],
         position: 'bottom',
      },
      calculable : true,
      series : [
          {
              name:'Participation',
              type:'funnel',
              width: '40%',
              itemStyle : dataStyle,
              data:[
                  {value:60, name:'requested credit'},
                  {value:40, name:'finished the game'},
                  {value:20, name:'began the game'},
                  {value:80, name:'entered the module'},
                  {value:100, name:'learners accessed the platform'}
              ]
          }
      ]
  };  

});
}

ngOnDestroy(): void {
  this.themeSubscription.unsubscribe();
}
}
          
      
      /*tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      legend: {
          data : ['learners accessed the platform','entered the module','began the game','finished the game','requested credit']
      },
      calculable : true,
      series : [
          {
              name:'漏斗图',
              type:'funnel',
              x: '10%',
              y: 60,
              //x2: 80,
              y2: 60,
              width: '80%',
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort : 'descending', // 'ascending', 'descending'
              gap : 10,
              itemStyle: {
                  normal: {
                      // color: 各异,
                      borderColor: '#fff',
                      borderWidth: 1,
                      label: {
                          show: true,
                          position: 'inside'
                          // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                      },
                      labelLine: {
                          show: false,
                          length: 10,
                          lineStyle: {
                              // color: 各异,
                              width: 1,
                              type: 'solid'
                          }
                      }
                  },
                  emphasis: {
                      // color: 各异,
                      borderColor: 'red',
                      borderWidth: 5,
                      label: {
                          show: true,
                          formatter: '{b}:{c}%',
                          textStyle:{
                              fontSize:20
                          }
                      },
                      labelLine: {
                          show: true
                      }
                  }
              },
              data:[
                  {value:60, name:'requested credit'},
                  {value:40, name:'finished the game'},
                  {value:20, name:'began the game'},
                  {value:80, name:'entered the module'},
                  {value:100, name:'learners accessed the platform'}
              ]
          }
      ]
  };
});
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

                      
    /*this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Objective1', 'Objective2', 'Objective3'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: colors.infoLight,
            borderWidth: 0,
            data: [this.random(), this.random(), this.random()],
          }, {
            label: 'Dataset 2',
            backgroundColor: colors.successLight,
            borderWidth: 0,
            data: [this.random(), this.random(), this.random()],
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 0,
          },
        },
        scales: {
          xAxes: [
            {
              barPercentage: 0.5,
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
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}*/
