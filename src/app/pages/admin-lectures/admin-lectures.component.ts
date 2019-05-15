import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-admin-lectures',
  templateUrl: './admin-lectures.component.html',
  styleUrls: ['./admin-lectures.component.scss']
})
export class AdminLecturesComponent {
  
  movies = [
    '1. How to upgrade to Angular 7',
    '2. Angular 7 CLI Prompts',
    '3. Application Performance',
    '4. Documentation Updates',
    '5. Dependency Updates',
    '6. Drag and Drop',
    '7. Virtual Scrolling',
    '8. Improved Accessibility of Selects',
    '9. Partner Launches',
    '10. Angular Elements'
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
