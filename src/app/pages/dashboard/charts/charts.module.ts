import { NgModule, Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent} from './charts.component';
import { NbThemeService, NbColorHelper } from '@nebular/theme';


@NgModule({
  imports: [
    NgxChartsModule,
  ],
  declarations: [
    ChartsComponent,
  ],
})
export class ChartsModule { }