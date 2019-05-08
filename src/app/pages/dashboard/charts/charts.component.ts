import { Component} from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { chartData } from './chart-data';

@Component({
  selector: 'ngx-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  chartData: any[];

  view: any[] = [230, 100];
  
  //options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'User';
  showYAxisLabel = true;
  yAxisLabel = 'Score';

  colorScheme = {
    domain:['#5C6670','#5C6670','#5C6670','#5C6670']
  };

  constructor(){
    Object.assign(this, { chartData })
  }

  onSelect(event){
    console.log(event);
  }

}
