import { ChangeDetectionStrategy, OnDestroy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-game-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnDestroy{

  private alive = true;
  revealed = false;
  
  
  constructor() { }

  toggleView() {
    this.revealed = !this.revealed;
  }

  ngOnDestroy(){
    this.alive = false;
  }

}
