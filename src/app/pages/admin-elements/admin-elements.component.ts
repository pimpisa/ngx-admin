import { Component} from '@angular/core';
/**Dummy Data */
import { Contacts, RecentUsers, UserData } from '../../@core/data/users';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';



@Component({
  selector: 'ngx-admin-elements',
  templateUrl: './admin-elements.component.html',
  styleUrls: ['./admin-elements.component.scss']
})
export class AdminElementsComponent{
  private alive = true;
  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  elements = [
    { id: 1, name: 'BUZZWORTHY'},
    { id: 2, name: 'HOW-TO VIDEOS'}
  ];

  constructor(private userService: UserData,
      private themeService: NbThemeService,
      private breakpointService: NbMediaBreakpointsService, 
      private NbWindowService:NbWindowService) {
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
        .pipe(takeWhile(() => this.alive))
        .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      
    });

    forkJoin(
      this.userService.getContacts(),
      this.userService.getRecentUsers(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
        this.contacts = contacts;
        this.recent = recent;
      });
  }

}
