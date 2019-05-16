import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-admin-lectures',
  templateUrl: './admin-lectures.component.html',
  styleUrls: ['./admin-lectures.component.scss']
})
export class AdminLecturesComponent {
  
  lectures = [
    { id: 1, title: 'PINK'},
    { id: 2, title: 'GET INTO THE PINK'},
    { id: 3, title: 'WHITE TEA'},
    { id: 4, title: 'AHA'},
    { id: 5, title: 'RETINOL'}
    
  ];
  constructor(private NbWindowService:NbWindowService) {}
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lectures, event.previousIndex, event.currentIndex);
  }
  openWindow(contentTemplate) {
    this.NbWindowService.open(
      contentTemplate,
      {
        title: '',
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }
}
