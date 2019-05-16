import { Component, Input} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-preview-game',
  templateUrl: './preview-game.component.html',
  styleUrls: ['./preview-game.component.scss']
})
export class PreviewGameComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<PreviewGameComponent>) {}

  dismiss() {
    this.ref.close();
  }

}
