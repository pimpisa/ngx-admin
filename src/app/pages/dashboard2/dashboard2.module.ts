import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { Dashboard2Component } from './dashboard2.component';
import { PopularBoxComponent } from './popular-box/popular-box.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { } from 'echarts/dist/echarts';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [Dashboard2Component, PopularBoxComponent, CircleChartComponent, BarChartComponent, ProgressBarComponent],
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgSelectModule,
  ]
})
export class Dashboard2Module { }
