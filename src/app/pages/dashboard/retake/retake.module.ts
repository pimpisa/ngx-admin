import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({

    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers:[ChartService],
  

})

export class retakeModule {}