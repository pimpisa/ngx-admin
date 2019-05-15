import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent {
  menus = [
    'Home',
    'News',
    'Gameboard',
    'Community'
  ];


  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.menus, event.previousIndex, event.currentIndex);
  }

  
  
  
  
}