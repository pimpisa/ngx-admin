import { Input, Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'ngx-game-quest',
  templateUrl: './game-quest.component.html',
  styleUrls: ['./game-quest.component.scss']
})
export class GameQuestComponent implements OnInit {
  @Input() revealed: boolean;

  questions = [
    {text:'1. Suzie\'s dry skin is showing more lines and wrinkles, plus, it doesn’t feel as firm as it used to.'},
    {text:'2. Lori\'s years of fun in the sun has resulted in aging, dark spots and discoloration.'},
    {text:'3. Renee has used prescription Retin A in the past and finds it too harsh for her skin.'},
  ];

  constructor() { }

  ngOnInit() {
  }

  sort(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  toggleView() {
    this.revealed = !this.revealed;
    console.log("toggleView"+this.revealed);
  }



}
