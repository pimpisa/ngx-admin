import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EdgageComponent } from './report/edgage/edgage.component';
import { EdgageGameComponent } from './edgage-game/edgage-game.component';
import { TrafficComponent } from './traffic/traffic.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
    path: 'report/edgage',
    component: EdgageComponent,
  }
  ,{
    path: 'edgage-game',
    component: EdgageGameComponent,
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  EdgageComponent,
  EdgageGameComponent,
  
];
