import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-admin-campaign',
  templateUrl: './admin-campaign.component.html',
  styleUrls: ['./admin-campaign.component.scss']
})
export class AdminCampaignComponent {
  movies = [
    'campaign1',
    'campaign2',
    'campaign3',
    'campaign4',
    'campaign5',
    'campaign6',
    'campaign7',
    'campaign8'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
