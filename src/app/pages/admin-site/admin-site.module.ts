import { NgModule } from '@angular/core';
import { AdminSiteComponent } from './admin-site.component';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminSiteComponent,
  ],
  
})
export class AdminSiteModule { }
