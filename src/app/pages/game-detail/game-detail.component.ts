import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-game-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  revealed = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

}
