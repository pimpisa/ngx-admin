'@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HttpClientModule} from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    ThemeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule
  ],
  exports:[
      BrowserAnimationsModule
  ],
  
})
export class AdminLectureseModule { }