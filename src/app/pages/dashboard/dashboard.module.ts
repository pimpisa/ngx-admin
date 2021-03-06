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
import { NbActionsModule } from '@nebular/theme';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from '../charts/charts.module';
import { ChartModule } from 'angular2-chartjs';
import { AudienceComponent } from './audience/audience.component';
import { DemographicComponent } from './demographic/demographic.component';
import { RetakeComponent } from './retake/retake.component';
import { PrepostComponent } from './prepost/prepost.component';
import { FunnelComponent } from './funnel/funnel.component';
import { } from 'echarts/dist/echarts';
import { ReportComponent } from './report/report.component';
import { PopularComponent } from './popular/popular.component';
import { ChartService } from '../../services/chart.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule } from '@angular/forms';
import { EdgageComponent } from './report/edgage/edgage.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EdgageGameComponent } from './edgage-game/edgage-game.component';

const components = [
  EdgageComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NbActionsModule,
    ChartsModule,
    ChartModule,
    NgMultiSelectDropDownModule,
    SelectDropDownModule,
    NgSelectModule, 
    FormsModule,
  ],
  providers: [ChartService], 
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
    ReportComponent,
    PopularComponent,
    EdgageComponent,
    EdgageGameComponent,
    
  ],
})
export class DashboardModule { }
