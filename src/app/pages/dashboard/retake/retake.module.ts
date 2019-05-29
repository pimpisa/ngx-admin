import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { RetakeComponent } from '../retake/retake.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({

    declarations:[
        RetakeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers:[ChartService],
    bootstrap: [RetakeComponent]

})

export class retakeModule {}