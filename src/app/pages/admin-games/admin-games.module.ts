import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminGamesComponent } from './admin-games.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    ThemeModule,
    DragDropModule,
  ],
  declarations: [
    AdminGamesComponent,
  ],
})
export class AdminGamesModule { }