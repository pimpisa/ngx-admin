import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../interfaces/game';
import { } from '../../admin-game-demos/admin-game-demos.component';

@Component({
  selector: 'ngx-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  //DropDown
  games: Game[] = [];


  constructor(private fb: FormBuilder,private gameService: GameService) { }

  ngOnInit() {
    this.loadGame();
    
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

  }
  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
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

}
