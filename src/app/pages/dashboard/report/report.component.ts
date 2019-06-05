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
   //Games
   game_overall: any;
   game_edgage: any;
   game_users: any;
   game_mnum: any;
   //Survey
   survey_overall: any;
   survey_edgage: any;
   survey_users: any;
   survey_mnum: any;
   //Pages
   pages_clicks: any;
   pages_pages: any;
   pages_percent: any;
    //Leaderboard
    top1_name: any;
    top1_score: any;
    top2_name: any;
    top2_score: any;
    top3_name: any;
    top3_score: any;
    top4_name: any;
    top4_score: any;
    top5_name: any;
    top5_score: any;
    high_score: any;
    high_name: any;
    //Push_Message
    msg_sms: any;
    msg_email: any;
  
  
  constructor(private theme: NbThemeService,private reportData: ReportService) {
    this.reportData.getOverAllReport()
    .subscribe(res => {
      this.game_overall = res['data'].games.overall;
      this.game_edgage = res['data'].games.edgage;
      this.game_users = res['data'].games.users;
      this.game_mnum = res['data'].games.mnum;
      this.survey_overall = res['data'].surveys.overall;
      this.survey_edgage = res['data'].surveys.edgage;
      this.survey_users = res['data'].surveys.users;
      this.survey_mnum = res['data'].surveys.mnum;
      this.pages_clicks = res['data'].pages.clicked;
      this.pages_pages = res['data'].pages.pages;
      this.pages_percent = res['data'].pages.precent;
      this.msg_sms = res['data'].messages.sms;
      this.msg_email = res['data'].messages.email;
      this.top1_name = res['data'].leadboard.top5;
      this.high_score = res['data'].leadboard.high;
      this.high_name = res['data'].leadboard.name;
      //this.top1_score = res['data'].leadboard.top5[0].value;
      console.log("top1-score" + this.top1_name[0][0]);
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
              data: ['EMAIL', 'SMS']
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
              data: [this.msg_email,this.msg_sms],
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
              data : [this.top1_name[0][0],this.top1_name[1][0], this.top1_name[2][0],this.top1_name[3][0],this.top1_name[4][0]],
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
              data:[this.top1_name[0][1],this.top1_name[1][1], this.top1_name[2][1],this.top1_name[3][1],this.top1_name[4][1]],
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
  
