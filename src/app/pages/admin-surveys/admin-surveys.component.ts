import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-admin-surveys',
  templateUrl: './admin-surveys.component.html',
  styleUrls: ['./admin-surveys.component.scss']
})
export class AdminSurveysComponent {

  surveys = [
    {id:'1', title:'Find My Undertone'},
    {id:'2', title:'White Tea'}
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.surveys, event.previousIndex, event.currentIndex);
  }


}
