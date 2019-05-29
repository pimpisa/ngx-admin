import { Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DropdownService } from '../../../services/dropdown.service';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { title} from '../../../interfaces/title';

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

  arrTitle: any [] = [
    {id:'BE',name: 'BE'},
    {id:'BS',name: 'BS'},
    {id:'DEPT BA' ,name: 'DEPT BA'},
    {id:'DM',name: 'DM'},
    {id:'EA BC' ,name: 'EA BC'},
    {id:'EA FT' ,name: 'EA FT'},
    {id:'EA PT' ,name: 'EA PT'},
    {id:'MB' ,name: 'MB'}
  ];

  keyToken = 'blfyjKOdJPCTESy5zbC394VYYxzXnB21';

  constructor(private theme: NbThemeService, private dropdownService: DropdownService, private http: HttpClient) {
    this.getTitleList();

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Job Title 1', 'Job Title 2', 'Job Title 3'],
        datasets: [{
          data: [300, 500, 100],
          //backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
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

  getTitleList() {
    
  }

  ngOnInit(): void {
    this.http.get('https://eadev.edgagement.com/api/user/type', {
      'headers': new HttpHeaders().set('Authorization', this.keyToken)

    })
    .subscribe(
      data => {
        this.titleList = data["data"];
        console.log("this titleList: "+ JSON.stringify(this.titleList));
        this.userTitle = Object.keys(this.titleList);
        //let keys = Object.keys(this.titleList);
        //console.log("this titleList key--: "+ keys);
        //let values = Object.values(this.titleList);
        console.log("this titleList key--: "+ this.userTitle);
    
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
