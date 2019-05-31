import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ChartService } from '../../../services/chart.service';

@Component({
  selector: 'ngx-retake',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
  styleUrls: ['./retake.component.scss']
})
export class RetakeComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  chart = [];

  constructor(private theme: NbThemeService, private chartService: ChartService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['SMS', 'EMAIL'],
        datasets: [{
          label: '# of Votes',
          data: [12, 23],
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }]
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: false,
        scales: {
          xAxes: [
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
          yAxes: [
            {
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
      };
    });
  }

  ngOnInit(): void {
   /*this.chartService.getResponseRate()
      .subscribe(res => {
        console.log(res)
      })*/
    
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
