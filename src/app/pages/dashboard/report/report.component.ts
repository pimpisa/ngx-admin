import { delay, takeWhile } from 'rxjs/operators';
import { Component, AfterViewInit, OnDestroy, OnInit, Input} from '@angular/core';
import { NgxGauge } from 'ngx-gauge/gauge/gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartOptions, ChartType, ChartDataSets} from '../../../../../node_modules/chart.js';
import { Report_game, Report_survey, Report_page, Report_leaderboard, Report_message, Report_mostgame, Report_mostclick, Report_resource } from '../../../interfaces/report';
import { ReportService } from '../../../services/report.service';
import { Observable } from 'rxjs';
import { LayoutService } from '../../../@core/utils';
  
@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
    
    top_name = [];
    top_score = [];
    data: any;
    options: any;
    options_leaderboard: any;

    high_score: any;
    high_name: any;

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
   //Push_Message
   msg_sms: any;
   msg_email: any;

    constructor(private report: ReportService) {}

    ngOnInit() {
    this.report.getOverAllReport()
      .subscribe(res => {
        //Games
        this.game_overall = res['data'].games.overall;
        this.game_edgage = res['data'].games.edgage;
        this.game_users = res['data'].games.users;
        this.game_mnum = res['data'].games.mnum;
        //Survey
        this.survey_overall = res['data'].surveys.overall;
        this.survey_edgage = res['data'].surveys.edgage;
        this.survey_users = res['data'].surveys.users;
        this.survey_mnum = res['data'].surveys.mnum;
        //Pages
        this.pages_clicks = res['data'].pages.clicked;
        this.pages_pages = res['data'].pages.pages;
        this.pages_percent = res['data'].pages.precent;
        let email = res['data'].messages.email;
        let text = res['data'].messages.sms;
        this.high_score = res['data'].leadboard.high;
        this.high_name = res['data'].leadboard.name;
        let top1_name = res['data'].leadboard.top5[0][0];
        let top1_score = res['data'].leadboard.top5[0][1];
        let top2_name = res['data'].leadboard.top5[1][0];
        let top2_score = res['data'].leadboard.top5[1][1];
        let top3_name = res['data'].leadboard.top5[2][0];
        let top3_score = res['data'].leadboard.top5[2][1];
        let top4_name = res['data'].leadboard.top5[3][0];
        let top4_score = res['data'].leadboard.top5[3][1];
        let top5_name = res['data'].leadboard.top5[4][0];
        let top5_score = res['data'].leadboard.top5[4][1];
        //Message
        this.msg_sms = res['data'].messages.sms;
        this.msg_email = res['data'].messages.email;

        console.log("top5_score" + top5_score);
        console.log("text" + text);

        //Graph
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

        this.options =  {
            tooltip : {
              trigger: 'axis'
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
                  data: [email, text],
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
          }

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
              data : [top1_name,top2_name, top3_name,top4_name,top5_name],
              axisLine: 5
          }
      ],
      yAxis : [
          {
              show : false,
          }
      ],
      series : [
          {
              name:'User score',
              type:'bar',
              data:[top1_score,top2_score, top3_score,top4_score,top5_score],
              itemStyle: {
                color:'#849EFE',
                 
              },
              markPoint : {
                  data : [
                      {type : 'max', name: top1_name},
                      {type : 'min', name: top5_name}
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

      })//Subscribe

      
  }//OnInit End

}
  
