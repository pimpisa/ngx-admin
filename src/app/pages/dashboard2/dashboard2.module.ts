import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { Dashboard2Component } from './dashboard2.component';
import { PopularBoxComponent } from './popular-box/popular-box.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [Dashboard2Component, PopularBoxComponent, CircleChartComponent, BarChartComponent, ProgressBarComponent],
  imports: [
    ThemeModule
  ]
})
export class Dashboard2Module { }