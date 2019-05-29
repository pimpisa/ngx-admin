import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './team/team.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { NbActionsModule } from '@nebular/theme';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from '../charts/charts.module';
import { ChartModule } from 'angular2-chartjs';
import { AudienceComponent } from './audience/audience.component';
import { DemographicComponent } from './demographic/demographic.component';
import { RetakeComponent } from './retake/retake.component';
import { PrepostComponent } from './prepost/prepost.component';
import { FunnelComponent } from './funnel/funnel.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NbActionsModule,
    ChartsModule,
    ChartModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    ChartsComponent,
    AudienceComponent,
    DemographicComponent,
    RetakeComponent,
    PrepostComponent,
    FunnelComponent,
    
  ],
})
export class DashboardModule { }
