import { Component, AfterViewInit, OnDestroy, OnInit} from '@angular/core';
import { NgxGauge } from 'ngx-gauge/gauge/gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartOptions, ChartType, ChartDataSets} from '../../../../../node_modules/chart.js';
import { Report_game, Report_survey, Report_page, Report_leaderboard, Report_message, Report_mostgame, Report_mostclick, Report_resource } from '../../../interfaces/report';
import { ReportService } from '../../../services/report.service';
import { Observable } from 'rxjs';
  
@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements AfterViewInit, OnDestroy {
  //Graph
  data: any;
  options: any;
  themeSubscription: any;
  options_leaderboard: any;
  //Data
  games:Observable<Report_game>;
  leaderboard: Observable<Report_leaderboard>;
  messages: Observable<Report_message>;
  pages: Observable<Report_page>;
  surveys: Observable<Report_survey>;
  
  constructor(private theme: NbThemeService,private reportData: ReportService) {}

  ngOnInit() {
    this.reportData.getOverAllReport()
     .subscribe(res => {
       console.log(res);
       this.games = res['data'].games;
       this.leaderboard = res['data'].leaderboard;
       this.messages = res['data'].messages;
       this.pages = res['data'].pages;
       this.surveys = res['data'].surveys;
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
                position: 'insideRight',
                formatter: '{c}%',
              textStyle: {
            fontFamily: 'Roboto',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
            }
        }
    };

      this.options = {
        tooltip: {
          trigger: 'item'
      },
     
      calculable: true,
      grid: {
          borderWidth: 0,
          y: 80,
          y2: 60
      },
      xAxis: [
          {
              type: 'category',
              show: false,
              data: ['Email', 'Text']
          }
      ],
      yAxis: [
          {
              type: 'value',
              show: false
          }
      ],
      series: [
          {
              name: 'Push Messages',
              type: 'bar',
              itemStyle: {
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
                          formatter: '{c}%\n{b}',
                          textStyle: {
                            fontFamily: 'Arial',
                            fontSize: 18,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                         },
                    }
                  }
              },
              data: [12,21],
              markPoint: {
                  tooltip: {
                      trigger: 'item',
                      backgroundColor: 'rgba(0,0,0,0)',
                      formatter: function(params){
                          return '<img src="' 
                                  + params.data.symbol.replace('image://', '')
                                  + '"/>';
                      }
                  },
                  data: [
                      {xAxis:0, y: 350, name:'Email', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                      {xAxis:1, y: 350, name:'Text', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
             
                  ]
              }
          }
      ]
      };
      //Leaderboard Rank
      var dataStyle_Leaderboard = { 
        normal: {
            label : {
                show: true,
                position: 'insideRight',
                formatter: '{c}%',
              textStyle: {
            fontFamily: 'Roboto',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
            }
        }
      };
      this.options_leaderboard = {
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
              data : ['User1','User2', 'User3','User4','User5'],
              axisLine: 5
          }
      ],
      yAxis : [
          {
              show : false,
          }
      ],
      series : [/**#849EFE */
          {
              name:'User score',
              type:'bar',
              data:[100,80,60,40,20],
              itemStyle: {
                color:'#849EFE',
                 
              },
              markPoint : {
                  data : [
                      {type : 'max', name: 'User1'},
                      {type : 'min', name: 'User5'}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name: 'Average'}
                  ]
              }
          },
        
      ]
      };
       
  });
  }

    ngOnDestroy(): void {
      this.themeSubscription.unsubscribe();
    }
  
}
  
