import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SmartTableComponent } from '../../pages/tables/smart-table/smart-table.component'
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    SmartTableComponent,

  ],
})
export class AdminUsersModule { }
