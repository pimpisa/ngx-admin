import { Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DropdownService } from '../../../services/dropdown.service';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'ngx-demographic',
  templateUrl: './demographic.component.html',
  /*template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,*/
  styleUrls: ['./demographic.component.scss']
})
export class DemographicComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;
  titleList:any;
  title_id: any;
  userTitle: String [];
  selected = null;

  keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';

  constructor(private theme: NbThemeService, private dropdownService: DropdownService, private http: HttpClient) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Job Title 1', 'Job Title 2', 'Job Title 3'],
        datasets: [{
          data: [300, 500, 100],
          backgroundColor: ['#213493', '#50930C', '#43B5C4'],
        }],
      };

      this.options = {
        maintainAspectRatio: true,
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
          position: 'right',
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
