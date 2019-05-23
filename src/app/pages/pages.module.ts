import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AdminSiteModule } from './admin-site/admin-site.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AdminGroupModule } from './admin-group/admin-group.module';
import { AdminPagesModule } from './admin-pages/admin-pages.module';
import { AdminCampaignComponent } from './admin-campaign/admin-campaign.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminResourceCenterComponent } from './admin-resource-center/admin-resource-center.component';
import { AdminGamesComponent } from './admin-games/admin-games.component';
import { AdminSurveysComponent } from './admin-surveys/admin-surveys.component';
import { AdminClassroomsComponent } from './admin-classrooms/admin-classrooms.component';
import { AdminLanguageComponent } from './admin-language/admin-language.component';
import { AdminLecturesComponent } from './admin-lectures/admin-lectures.component';
import { AdminReviewsComponent } from './admin-reviews/admin-reviews.component';
import { AdminWebSessionComponent } from './admin-web-session/admin-web-session.component';
import { AdminElementsComponent } from './admin-elements/admin-elements.component';
import { AdminGameDemosComponent } from './admin-game-demos/admin-game-demos.component';
import { ShowcaseDialogComponent } from './modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PreviewGameComponent } from './admin-game-demos/preview-game/preview-game.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    AdminSiteModule,
    AdminUsersModule,
    AdminGroupModule,
    AdminPagesModule,
    DragDropModule,
    Ng2SmartTableModule,
  
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    AdminCampaignComponent,
    AdminMenuComponent,
    AdminResourceCenterComponent,
    AdminGamesComponent,
    AdminSurveysComponent,
    AdminClassroomsComponent,
    AdminLanguageComponent,
    AdminLecturesComponent,
    AdminReviewsComponent,
    AdminWebSessionComponent,
    AdminElementsComponent,
    AdminGameDemosComponent,
    ShowcaseDialogComponent,
    PreviewGameComponent,
    AdminUserComponent,

  ]
})
export class PagesModule {
}
