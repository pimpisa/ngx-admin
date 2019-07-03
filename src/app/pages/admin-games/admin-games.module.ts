import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NbInputModule, NbButtonModule, } from '@nebular/theme';
import { AdminGamesRoutingModule } from './admin-games-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    DragDropModule,
    NbInputModule,
    NbButtonModule,
    AdminGamesRoutingModule,
   
  ],
  declarations: [],
  
})
export class AdminGamesModule { 


}