import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NbInputModule, NbButtonModule, } from '@nebular/theme'

@NgModule({
  imports: [
    ThemeModule,
    DragDropModule,
    NbInputModule,
    NbButtonModule,
  ],
  
})
export class AdminGamesModule { 


}