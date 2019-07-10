import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
//import { AdminSiteModule } from './admin-site/admin-site.module';
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
import { AdminGameDemosComponent } from './admin-game-demos/admin-game-demos.component';
import { ShowcaseDialogComponent } from './modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PreviewGameComponent } from './admin-game-demos/preview-game/preview-game.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserDetailComponent } from './admin-user/user-detail/user-detail.component';
import { NbBadgeModule } from '../../../node_modules/@nebular/theme/components/badge/badge.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { AdminElementsComponent } from './admin-elements/admin-elements.component';
import { UserService } from '../services/user.service';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { EdgageGameComponent } from './edgage-game/edgage-game.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ColorPickerModule } from 'ngx-color-picker';
import { FullCalendarModule } from '@fullcalendar/angular'; 

import { Dashboard2Module } from './dashboard2/dashboard2.module';
import { StepperComponent } from './game-detail/stepper/stepper.component';
import { EditWindowComponent } from './game-detail/edit-window/edit-window.component';
import { GameQuestComponent } from './game-detail/game-quest/game-quest.component';
import { AdminPlaningComponent } from './admin-planing/admin-planing.component';

//import { GameDetailComponent } from './admin-games/game-detail.module';

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
    //AdminSiteModule,
    AdminGroupModule,
    AdminPagesModule,
    DragDropModule,
    Ng2SmartTableModule,
    NbBadgeModule,
    NgMultiSelectDropDownModule,
    NgSelectModule, 
    MatCheckboxModule,
    MatInputModule,
    ColorPickerModule,
    FullCalendarModule,
    
    Dashboard2Module,
    
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
    AdminGameDemosComponent,
    ShowcaseDialogComponent,
    PreviewGameComponent,
    AdminUserComponent,
    UserDetailComponent,
    UserActivityComponent,
    AdminElementsComponent,
    UserService,
    AdminSiteComponent,
    AdminLoginComponent,
    AdminManageComponent,
    EdgageGameComponent,
    GameDetailComponent,
    StepperComponent,
    EditWindowComponent,
    GameQuestComponent,
    AdminPlaningComponent,

  ]
})
export class PagesModule {
}
