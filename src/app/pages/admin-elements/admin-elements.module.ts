import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminElementsComponent } from './admin-elements.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminElementsComponent,
  ],
})
export class AdminElementsModule { 


}