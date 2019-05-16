import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-admin-resource-center',
  templateUrl: './admin-resource-center.component.html',
  styleUrls: ['./admin-resource-center.component.scss']
})
export class AdminResourceCenterComponent {

  constructor(private NbWindowService:NbWindowService) {   
  }

  marchOn = [
    {id:'1', title:'MARCH ON brochure'},
    {id:'2', title:'MARCH ON calendar'},
    {id:'3', title:'MARCH ON service'},
    {id:'4', title:'MARCH ON lipstick chart'},
    {id:'5', title:'MARCH ON Booklet'},
    {id:'6', title:'MARCH ON Press Release'}
  ];

  uNWomenCharity = [
    {id:'1', title:'2019 UN video1'},
    {id:'2', title:'2019 UN video2'}
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.marchOn, event.previousIndex, event.currentIndex);
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
