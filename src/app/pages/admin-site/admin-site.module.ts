import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminSiteComponent } from './admin-site.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminSiteComponent,
  ],
})
export class AdminSiteModule { }
