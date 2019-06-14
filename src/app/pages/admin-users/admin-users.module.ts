import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdminUsersComponent } from '../../pages/admin-users/admin-users.component';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AdminUsersComponent,
  ],
})
export class AdminUsersModule { }
