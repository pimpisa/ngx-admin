import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  public options:Object = {
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
            data: [10, 12],
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
}
  
  constructor() { }

  ngOnInit() {
  }

}
