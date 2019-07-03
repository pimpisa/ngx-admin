import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-game-quest',
  templateUrl: './game-quest.component.html',
  styleUrls: ['./game-quest.component.scss']
})
export class GameQuestComponent implements OnInit {

  questions = [
    {text:'1. Suzie\'s dry skin is showing more lines and wrinkles, plus, it doesn’t feel as firm as it used to.'},
    {text:'2. Lori\'s years of fun in the sun has resulted in aging, dark spots and discoloration.'},
    {text:'3. Renee has used prescription Retin A in the past and finds it too harsh for her skin.'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
