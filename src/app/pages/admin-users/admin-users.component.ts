import { Component, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { SmartTableComponent } from '../tables/smart-table/smart-table.component'
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
/**Import this for the dummy users */
import { Contacts, RecentUsers, UserData } from '../../@core/data/users';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
/**Import this for popup-window */
import { NbWindowService} from '@nebular/theme'
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';
import { NbWindowRef } from '@nebular/theme';
//import { DayCellComponent } from './day-cell/day-cell.component';

@Component({
  selector: 'ngx-admin-users',
  styleUrls: ['./admin-users.component.scss'],
  templateUrl: './admin-users.component.html',
})
export class AdminUsersComponent implements OnDestroy{
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
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

    settings = {
        actions: {
            add: false,
            edit:false,
            delete:false
        },
        columns: {
          username: {
            title: 'Username',
            type: 'string',
          },
          view: {
            addButtonContent: '<i class="fa fa-address-card"></i>',
            icon: 'fa fa-address-card',
          },
        },
      };
      source: LocalDataSource = new LocalDataSource();
      ngOnDestroy(){
        this.alive =false;
      }
}

