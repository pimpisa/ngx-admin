import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminGroupComponent } from './admin-group.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminGroupComponent,
  ],
})
export class AdminGroupModule { }
