import { Component, AfterContentInit, OnDestroy  } from '@angular/core';
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
export class ReportComponent {
  /*data: any;
  options: any;
  themeSubscription: any;
  
  constructor(private theme: NbThemeService) {
  }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      series : [
        {
            type:'gauge',
            detail : {formatter:'{value}%'},
            startAngle:225,
            endAngle:-45,
            axisTick:{show:false},
            pointer: {
              width:50,
              length: '50%',
              color: 'rgb(169,169,169)'
            },
            data:[{value: 50, name: ''}]
        }
    ]
  };
       
  });
  }

    ngOnDestroy(): void {
      this.themeSubscription.unsubscribe();
    }*/
}
  
