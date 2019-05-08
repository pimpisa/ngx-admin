import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-admin-reviews',
  templateUrl: './admin-reviews.component.html',
  styleUrls: ['./admin-reviews.component.scss']
})
export class AdminReviewsComponent{

    reviews = [
        {id: 1, name: 'DGDFG', status: 'In Review', view: '7/7', approve: '3/7'},
        {id: 2, name: 'Added GIF', status: 'In Review', view: '1/1', approve: '0/1'},
        {id: 3, name: 'HOW-To VIDEOS Element', status: 'In Review', view: '1/1', approve: '0/0'},
        {id: 4, name: 'BUZZWORTHY Element', status: 'In Review', view: '1/1', approve: '0/0'}
    ];

}
