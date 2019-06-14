import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PreviewGameComponent } from './preview-game/preview-game.component';


@NgModule({
  imports: [
    ThemeModule,
  
  ],
  declarations: [
    PreviewGameComponent,
  ],
})
export class AdminGameDemosModule { 

}