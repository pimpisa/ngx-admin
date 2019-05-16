import { Component, OnDestroy } from '@angular/core';
/**Dummy Users */
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
    selector: 'ngx-admin-group',
    styleUrls: ['./admin-group.component.scss'],
    templateUrl: './admin-group.component.html',
  })
export class AdminGroupComponent{
    private alive = true;
    contacts: any[];
    recent: any[];
    breakpoint: NbMediaBreakpoint;
    breakpoints: any;

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

