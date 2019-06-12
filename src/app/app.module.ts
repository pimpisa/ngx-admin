/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbActionsModule } from '@nebular/theme';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartModule, HIGHCHARTS_MODULES } from '../../node_modules/highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';
import { ChartService } from '../app/services/chart.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
//import { GaugeModule } from 'angular-gauge';


@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbActionsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGaugeModule,
    NgMultiSelectDropDownModule,
    SelectDropDownModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}],
})
export class AppModule {
}
