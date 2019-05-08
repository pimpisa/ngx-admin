import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminMenuComponent } from './admin-menu.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    ThemeModule,
    DragDropModule,
  ],
  declarations: [
    AdminMenuComponent,
  ],
})
export class AdminMenuModule { }