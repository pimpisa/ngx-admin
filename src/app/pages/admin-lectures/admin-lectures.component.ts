import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-admin-lectures',
  templateUrl: './admin-lectures.component.html',
  styleUrls: ['./admin-lectures.component.scss']
})
export class AdminLecturesComponent {

  selectedItemNgModel;

  selectedItemFormControl = new FormControl();
}
