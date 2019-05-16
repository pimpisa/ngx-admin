import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { AdminGameDemosComponent } from './admin-game-demos.component';
import { PreviewGameComponent } from './preview-game/preview-game.component';


@NgModule({
  imports: [
    ThemeModule,
  
  ],
  declarations: [
    AdminGameDemosComponent,
    PreviewGameComponent,
  ],
})
export class AdminGameDemosModule { 

}