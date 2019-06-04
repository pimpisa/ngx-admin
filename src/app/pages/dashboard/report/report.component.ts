import { Component, OnInit } from '@angular/core';
import { NgxGauge } from 'ngx-gauge/gauge/gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { NbThemeService } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartOptions, ChartType, ChartDataSets} from '../../../../../node_modules/chart.js';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    var labelTop = {
      normal : {
          label : {
              show : true,
              position : 'center',
              formatter : '{b}',
              textStyle: {
                  baseline : 'bottom'
              }
          },
          labelLine : {
              show : false
          }
      }
  };
  var labelFromatter = {
      normal : {
          label : {
              formatter : function (params){
                  return 100 - params.value + '%'
              },
              textStyle: {
                  baseline : 'top'
              }
          }
      },
  }
  var labelBottom = {
      normal : {
          color: '#ccc',
          label : {
              show : true,
              position : 'center'
          },
          labelLine : {
              show : false
          }
      },
      emphasis: {
          color: 'rgba(0,0,0,0)'
      }
  };
  var radius = [53, 55];
  this.options = {
      legend: {
          x : 'center',
          y : 'center',
          data:[
              'Engagement'
          ]
      },
      series : [
          {
              type : 'pie',
              center : ['10%', '30%'],
              radius : radius,
              x: '0%', // for funnel
              itemStyle : labelFromatter,
              data : [
                  {name:'other', value:98.7, itemStyle : labelBottom},
                  {name:'GoogleMaps', value:1.3,itemStyle : labelTop}
              ]
          },
      ]
  };
  }

  ngOnInit() {
  }              

}
