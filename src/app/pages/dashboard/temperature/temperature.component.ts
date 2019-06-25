import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { delay, takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { LayoutService } from '../../../@core/utils/layout.service';

export interface Participation {

  title: string;
  rate: number;
    
}

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})


export class TemperatureComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;
  //progress
  private alive = true;
  

  progressInfoData: Participation[] = [
    {
      title: 'Accessed the platform',
      rate: 100,
    },
    {
      title: 'Entered the module',
      rate: 80,
    },
    {
      title: 'Began the game',
      rate: 60,
    },
    {
      title: 'Finished the game',
      rate: 40,
    },
    {
      title: 'Requested credit',
      rate: 20,
    }
  ];


  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        datasets: [{
          data: [300, 500, 100],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  
}
