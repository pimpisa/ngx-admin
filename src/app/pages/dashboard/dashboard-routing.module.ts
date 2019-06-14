import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { EdgageComponent } from './report/edgage/edgage.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'admin-site',
    component: AdminSiteComponent,
  }, {
    path: 'edgage',
    component: EdgageComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  
];
