import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminGroupComponent } from './admin-group/admin-group.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminResourceCenterComponent } from './admin-resource-center/admin-resource-center.component';
import { AdminGamesComponent } from './admin-games/admin-games.component';
import { AdminSurveysComponent } from './admin-surveys/admin-surveys.component';
import { AdminElementsComponent } from './admin-elements/admin-elements.component';
import { AdminReviewsComponent } from './admin-reviews/admin-reviews.component';
import { AdminLecturesComponent } from './admin-lectures/admin-lectures.component';
import { AdminClassroomsComponent } from './admin-classrooms/admin-classrooms.component';
import { AdminCampaignComponent } from './admin-campaign/admin-campaign.component';
import { AdminLanguageComponent } from './admin-language/admin-language.component';
import { AdminWebSessionComponent } from './admin-web-session/admin-web-session.component';
import { AdminGameDemosComponent } from './admin-game-demos/admin-game-demos.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { EdgageGameComponent } from './edgage-game/edgage-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';


import { Dashboard2Component } from './dashboard2/dashboard2.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'ecommerce',
    component: ECommerceComponent,
  }, {
    path: 'game-detail',
    component: GameDetailComponent,
  },{
    path: 'user-activity',
    component: UserActivityComponent,
  }
  , {
    path: 'edgage-game',
    component: EdgageGameComponent,
  }
  , {
    path: 'admin-login',
    component: AdminLoginComponent,
  }
  , {
    path: 'dashboard',
    component: DashboardComponent,
  }
  , {
    path: 'dashboard2',
    component: Dashboard2Component,
  }, 
  {
    path: 'admin-user',
    component: AdminUserComponent,
  }, 
  {
    path: 'admin-game-demos',
    component: AdminGameDemosComponent,
  },
  {
    path: 'admin-manage',
    component: AdminManageComponent,
  },
  {
    path: 'admin-site',
    component: AdminSiteComponent,
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
    path: 'admin-classrooms',
    component: AdminClassroomsComponent,
  },
  {
    path: 'admin-campaign',
    component: AdminCampaignComponent,
  },
  {
    path: 'admin-language',
    component: AdminLanguageComponent,
  },
  {
    path: 'admin-web',
    component: AdminWebSessionComponent,
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
