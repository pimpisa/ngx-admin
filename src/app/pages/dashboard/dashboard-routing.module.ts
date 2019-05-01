import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'admin-site',
    component: AdminSiteComponent,
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
