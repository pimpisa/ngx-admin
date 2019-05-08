import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent} from './charts.component';

@NgModule({
  imports: [
    NgxChartsModule,
  ],
  declarations: [
    ChartsComponent,
  ],
})
export class ChartsModule { }