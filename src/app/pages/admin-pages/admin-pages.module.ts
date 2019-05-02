import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminPagesComponent } from './admin-pages.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminPagesComponent,
  ],
})
export class AdminPagesModule { }
