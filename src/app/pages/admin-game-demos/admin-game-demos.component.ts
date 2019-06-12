import { Component, TemplateRef, ViewChild, HostBinding, OnInit } from '@angular/core';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from '../modal-overlays/popovers/popover-examples.component';
import { NbWindowService } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from '../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';
import { PreviewGameComponent } from './preview-game/preview-game.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'ngx-admin-game-demos',
  templateUrl: './admin-game-demos.component.html',
  styleUrls: ['./admin-game-demos.component.scss']
})
export class AdminGameDemosComponent {
  names: string[] = [];
  loseResult: string;
  games: Game[] = [];
  displayedGames: string[] = ['id', 'title'];
  
  constructor(private modalService: NgbModal, private gameService: GameService) {}

  ngOnInit() {
    this.loadGame();
    
  }

  getColorClass(index){
    if (index % 5 == 0){
      return 'mango';
    }else if (index % 5 == 4) {
      return 'sky';
    } else if (index % 5 == 3){
      return 'violet';
    }else if (index % 5 == 2){
      return 'mint';
    } else {
      return 'heart';
    }
  }
  
  loadGame(){
    this.gameService.getGame()
      .subscribe(
        data => {
          this.games = data['data'];
          console.log("gmas" + JSON.stringify(this.games));

        },
        error => console.log(error));
  }
  /*demos = [
    { id: 1, title: 'Words With Brands', image: 'assets/images/place_holder_crop.png'},
    { id: 2, title: 'Box Selector', image: 'assets/images/place_holder_crop.png'},
    { id: 3, title: 'Steps', image: 'assets/images/place_holder_crop.png'},
    { id: 4, title: 'Guess Number', image: 'assets/images/place_holder_crop.png'},
    { id: 5, title: 'Do U Get the Picture?', image: 'https://files.edgagement.com/images/games/icons/gameButton.jpg'},
    { id: 6, title: 'Fast Checker', image: 'assets/images/place_holder_crop.png'},
    { id: 7, title: 'How do you feel', image: 'https://files.edgagement.com/images/games/icons/gameSmileFace2.jpg'},
    { id: 8, title: 'Jumble Pic', image: 'https://files.edgagement.com/images/games/icons/gameBuildit.jpg'},
    { id: 9, title: 'Do you agree or disagree?', image: 'https://files.edgagement.com/images/games/icons/gameThumbs.jpg'},
    { id: 10, title: 'This, not that!', image: 'https://files.edgagement.com/images/games/icons/gameCircle2.jpg'},
    { id: 11, title: 'Double Match', image: 'https://files.edgagement.com/images/games/icons/gameConcentration2.jpg'},
    { id: 12, title: 'Swipe Right 2', image: 'https://files.edgagement.com/images/games/icons/gameSwipe2.jpg'},
    { id: 13, title: 'Swipe Right 1', image: 'https://files.edgagement.com/images/games/icons/gameSwipe.jpg'},
    { id: 14, title: 'Open Text', image: 'https://files.edgagement.com/images/games/icons/gameInput.jpg'},
    { id: 15, title: 'Wait, don\'t tell me!', image: 'https://files.edgagement.com/images/games/icons/gameAudio.jpg'},
    { id: 16, title: 'Match Maker', image: 'https://files.edgagement.com/images/games/icons/gameFlipbox.jpg'},
    { id: 17, title: 'Drop & Drag', image: 'https://files.edgagement.com/images/games/icons/gameDrop.jpg'},
    { id: 18, title: 'Fact or Fiction?', image: 'https://files.edgagement.com/images/games/icons/gameVideo.jpg'},
    { id: 19, title: 'Are u Smarter than...', image: 'https://files.edgagement.com/images/games/icons/gameSmileface.jpg'}
  ];*/

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
