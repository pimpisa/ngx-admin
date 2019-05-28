import { NgModule, Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent} from './charts.component';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
  imports: [
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    ChartsComponent,
  ],
})
export class ChartsModule { }