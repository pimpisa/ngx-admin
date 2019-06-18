import { AfterViewInit, Component, OnDestroy, AfterContentInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartOptions, ChartType, ChartDataSets} from '../../../../../node_modules/chart.js';
import { ChartService } from '../../../services/chart.service';

//import * as echarts from 'echarts';

@Component({
  selector: 'ngx-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.scss']
})
export class FunnelComponent implements AfterViewInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  funnel_data = [];
  
  constructor(private theme: NbThemeService, private charts: ChartService) {
  }

  ngOnInit() {
    this.charts.getLeaders()
      .subscribe(res => {
        console.log(res)
        /**
         * let temp_max = res['list'].map(res => res.main.temp_max);
            let temp_min = res['list'].map(res => res.main.temp_min);
            let alldates = res['list'].map(res => res.dt)

            let weatherDates = []
            alldates.forEach((res) => {
                let jsdate = new Date(res * 1000)
                weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
            })
         * 
         */
      })
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
                formatter: "{c}\n{b}"
            }
        }
      };

      this.options = {
        backgroundColor: echarts.bg,
        color: ["#5450A6", "#4562C9", "#005FC9", "#006CC9", colors.primaryLight],
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
        data : ['accessed the platform','entered the module','began the game','finished the game','requested credit']
      },
      calculable : true,
      series : [
          {
              name:'Participation',
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
              
                      borderColor: '#fff',
                      borderWidth: 1,
                      label: {
                          show: true,
                          position: 'inside',
                          formatter: '{c}\n{b}',
                          textStyle: {
                            fontFamily: 'sans-serif',
                            fontSize: 15,
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            color: '#000',
                          },
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
                          formatter: '{b}:{c}',
                          textStyle:{
                              fontSize:15
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
                {value:100, name:'accessed the platform'}
            ]
          }
      ]
  };
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
        data : ['accessed the platform','entered the module','began the game','finished the game','requested credit'],
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
                  {value:100, name:'accessed the platform'}
              ]
          }
      ]
    };*/  

  });
  }

    ngOnDestroy(): void {
      this.themeSubscription.unsubscribe();
    }
}
          
      
     