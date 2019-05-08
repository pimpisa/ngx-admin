import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGroupComponent } from './admin-group/admin-group.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminResourceCenterComponent } from './admin-resource-center/admin-resource-center.component';
import { AdminGamesComponent } from './admin-games/admin-games.component';
import { AdminSurveysComponent } from './admin-surveys/admin-surveys.component';
import { AdminElementsComponent } from './admin-elements/admin-elements.component';
import { AdminReviewsComponent } from './admin-reviews/admin-reviews.component';
import { AdminLecturesComponent } from './admin-lectures/admin-lectures.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, 
  {
    path: 'admin-site',
    component: AdminSiteComponent,
  }, 
  {
    path: 'admin-users',
    component: AdminUsersComponent,
  }, 
  {
    path: 'admin-pages',
    component: AdminPagesComponent,
  }, 
  {
    path: 'admin-group',
    component: AdminGroupComponent,
  },
  {
    path: 'admin-menu',
    component: AdminMenuComponent,
  },
  {
    path: 'admin-resource-center',
    component: AdminResourceCenterComponent,
  },
  {
    path: 'admin-elements',
    component: AdminElementsComponent,
  },
  {
    path: 'admin-reviews',
    component: AdminReviewsComponent,
  },
  {
    path: 'admin-games',
    component: AdminGamesComponent,
  },
  {
    path: 'admin-surveys',
    component: AdminSurveysComponent,
  },
  {
    path: 'admin-lectures',
    component: AdminLecturesComponent,
  },
  {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
