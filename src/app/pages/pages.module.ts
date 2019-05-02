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
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
