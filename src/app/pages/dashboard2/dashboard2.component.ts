import { Component, OnInit } from '@angular/core';

import { ReportService } from '../../services/report.service';

@Component({
  selector: 'ngx-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
  reports: Object[];
  populars: Object[];
  selectedGroup: String;

  reports_sample: Object[] = [
    {
      title: "Games",
      subtitle: "Percent Of Edgagement",
      chart: {
        type: 'circle',
        percent: 5
      },
      left_head: "Users",
      left_msg: "12/123",
      right_head: "Games",
      right_msg: "123",
      width: 4,
    },
    {
      title: "Survey",
      subtitle: "Percent Of Edgagement",
      chart: {
        type: 'circle',
        percent: 5
      },
      left_head: "Users",
      left_msg: "12/123",
      right_head: "Surveys",
      right_msg: "123",
      width: 4,
    },
    {
      title: "Pages",
      subtitle: "Percent of Click",
      chart: {
        type: 'circle',
        percent: 5
      },
      left_head: "Clicks",
      left_msg: "12/123",
      right_head: "Pages",
      right_msg: "123",
      width: 4,
    },
    {
      title: "Leaderboard",
      subtitle: "Ranking",
      chart: {
        type: 'bar',
        options: 5
      },
      mid_head: "1st Leader",
      mid_msg: "asd asdas pts",
      width: 8,
    },
    {
      title: "Push Messages",
      subtitle: "Email vs Text",
      chart: {
        type: 'bar',
        options: 5
      },
      left_head: "Sent Email",
      left_msg: "12/123",
      right_head: "Sent Text",
      right_msg: "123",
      width: 4,
    },
  ];

  populars_sample: Object[] = [
    {
      title: "Title 1",
      subtitle: "Sub Title 1",
      msg: "12 out of 123\nusers completed"
    },
    {
      title: "Title 2",
      subtitle: "Sub Title 2",
      msg: "12 out of 123\nusers completed"
    },
    {
      title: "Title 3",
      subtitle: "Sub Title 3",
      msg: "12 out of 123\nusers completed"
    },
  ];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.onGroupChange('sample');
  }

  onGroupChange(value) {
    this.selectedGroup = value;
    if(value=='ajax'){
      this.loadAjaxData();
    }else{
      this.reports = this.reports_sample;
      this.populars = this.populars_sample;
    }
  }

  loadAjaxData(){
    this.reportService.getOverAllReport()
      .subscribe(res => {
        var reports = [];

        //Games
        if(res['data'].games)
          reports.push({
            title: "Games",
            subtitle: "Percent Of Edgagement",
            chart: {
              type: 'circle',
              percent: res['data'].games.overall
            },
            left_head: "Users",
            left_msg: res['data'].games.edgage + "/" + res['data'].games.users,
            right_head: "Games",
            right_msg: res['data'].games.mnum,
            width: 4,
          });
        
        //Survey
        if(res['data'].surveys)
          reports.push({
            title: "Survey",
            subtitle: "Percent Of Edgagement",
            chart: {
              type: 'circle',
              percent: res['data'].surveys.overall
            },
            left_head: "Users",
            left_msg: res['data'].surveys.edgage + "/" + res['data'].surveys.users,
            right_head: "Surveys",
            right_msg: res['data'].surveys.mnum,
            width: 4,
          });
        
        //Pages
        if(res['data'].pages)
          reports.push({
            title: "Pages",
            subtitle: "Percent of Click",
            chart: {
              type: 'circle',
              percent: res['data'].pages.precent
            },
            left_head: "Clicks",
            left_msg: res['data'].pages.clicked,
            right_head: "Pages",
            right_msg: res['data'].pages.pages,
            width: 4,
          });

        //Leadboard
        if(res['data'].leadboard)
          reports.push({
            title: "Leaderboard",
            subtitle: "Ranking",
            chart: {
              type: 'bar',
              options: { 
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
                      data : [res['data'].leadboard.top5[0][0],res['data'].leadboard.top5[1][0],res['data'].leadboard.top5[2][0],res['data'].leadboard.top5[3][0],res['data'].leadboard.top5[4][0]],
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
                      data:[res['data'].leadboard.top5[0][1],res['data'].leadboard.top5[1][1],res['data'].leadboard.top5[2][1],res['data'].leadboard.top5[3][1],res['data'].leadboard.top5[4][1]],
                      itemStyle: {
                        color:'#849EFE',
                         
                      },
                      markPoint : {
                          data : [
                              {type : 'max', name: res['data'].leadboard.name},
                              {type : 'min', name: res['data'].leadboard.name}
                          ]
                      },
                      markLine : {
                          data : [
                              {type : 'average', name: 'Average'}
                          ]
                      }
                  },
                
              ]
              }
            },
            mid_head: "1st Leader",
            mid_msg: res['data'].leadboard.name+" "+res['data'].leadboard.high+" pts",
            width: 8,
          });

        //Message
        if(res['data'].messages)
          reports.push({
            title: "Push Messages",
            subtitle: "Email vs Text",
            chart: {
              type: 'bar',
              options: {
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
                      data: [res['data'].messages.email, res['data'].messages.sms],
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
            },
            left_head: "Sent Email",
            left_msg: res['data'].messages.email,
            right_head: "Sent Text",
            right_msg: res['data'].messages.sms,
            width: 4,
          });
        
        //populars
        var populars = [];
        if(res['data'].mostgame)
          populars.push({
            title: "Game",
            subtitle: res['data'].mostgame.title,
            msg: res['data'].mostgame.completed + " out of " + res['data'].mostgame.total + "\nusers completed"
          });
        
        if(res['data'].mostclick)
          populars.push({
            title: "Click",
            subtitle: res['data'].mostclick.title,
            msg: res['data'].mostclick.count + " opens\nin the 30 days"
          });
        
        if(res['data'].resources)
          populars.push({
            title: "Resources",
            subtitle: res['data'].resources.title,
            msg: res['data'].resources.count + " opens\nin the 30 days"
          });

        this.reports = reports;
        this.populars = populars;
      })
  }
}
