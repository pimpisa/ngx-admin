import { Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DropdownService } from '../../../services/dropdown.service';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Options } from 'selenium-webdriver';

@Component({
  selector: 'ngx-demographic',
  templateUrl: './demographic.component.html',
  /*template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,*/
  styleUrls: ['./demographic.component.scss']
})
export class DemographicComponent {
  data: any;
  options: any;
  constructor() {}

  ngOnInit() {
    
   //Graph
  this.options = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['Job title 1','Job title 2','Job title 3','Job title 4','Job title 5']
    },
    calculable : true,
    series : [
        {
            name:'Demographic',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                  color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                      '#75d6e8','#F0A8B4','#AFF3E6','#96A9C9','#F7AF80'
                    ];
                    return colorList[params.dataIndex]
                    },
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '20',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:335, name:'Job title 1'},
                {value:310, name:'Job title 2'},
                {value:234, name:'Job title 3'},
                {value:135, name:'Job title 4'},
                {value:1548, name:'Job title 5'}
            ]
        }
    ]
};

}
}
