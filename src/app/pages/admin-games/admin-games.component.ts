import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

export interface Game_Category {
  title: string;
  description: string;
  subGames:Object[];
}

@Component({
  selector: 'ngx-admin-games',
  templateUrl: './admin-games.component.html',
  styleUrls: ['./admin-games.component.scss']
})
export class AdminGamesComponent {

  quiz = [
   
  ];
  other = [
    { id: 1, title: 'Spin Games'},
    { id: 2, title: 'March On'},
    { id: 3, title: 'White Tea'}
  ];
  //Detail
  game_detail: string;
  game_title:string;
  game_desc: string;
  sub_game:string[];
  select_game: Game_Category[];
  //title = "subgame";
  //game_desc = "";
  //game_cat_detail:Game_Category[] = [
  game_cat_detail = [
    { title: 'Spin Games', description: 
    'Welcome to the Elizabeth Arden Spin to Win Challenge! !\nTo play the game, simply spin, tap and engage to see how well you know our products AND how to service our customers. Finish all 15 questions to earn your gratis product. Have fun and good luck!',
  subGames:[
    {
      title:'SELL IT TO ME!',
    },
    {
      title:'AGREE TO DISAGREE',
    },
    {
      title:'KNOW UR #\'S',
    },
    {
      title:'R U A PRODUCT GENIUS?',
    },
    {
      title:'SALES BOOSTER',
    },
  ]
  }
   /* { title: 'Spin Games', description: 
                            'Welcome to the Elizabeth Arden Spin to Win Challenge! !\nTo play the game, simply spin, tap and engage to see how well you know our products AND how to service our customers. Finish all 15 questions to earn your gratis product. Have fun and good luck!',
                          subGames:[
                            {
                              title:'SELL IT TO ME!',
                            },
                            {
                              title:'AGREE TO DISAGREE',
                            },
                            {
                              title:'KNOW UR #\'S',
                            },
                            {
                              title:'R U A PRODUCT GENIUS?',
                            },
                            {
                              title:'SALES BOOSTER',
                            },
                          ]
    },
    { title: 'March On', description: 'N/A',
                          subGames:[
                            {
                              title:'quiz me',
                            },
                            {
                              title:'Get to know PINK',
                            },
                            {
                              title:'March on TEST game',
                            }
                          ]
    },
    { title: 'White Tea', description: 'N/A',
                          subGames:[
                            {
                              title:'Quiz Me',
                            },
                            {
                              title:'White Tea QuizMe',
                            }
                          ]
    },*/
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  sort(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sub_game, event.previousIndex, event.currentIndex);
  }

  showDetail(game:string){
    this.game_title = game;
    if (game == "Spin Games"){
      this.game_desc = "Welcome to the Elizabeth Arden Spin to Win Challenge! !\nTo play the game, simply spin, tap and engage to see how well you know our products AND how to service our customers. Finish all 15 questions to earn your gratis product. Have fun and good luck!'";
      this.sub_game = [ 'SELL IT TO ME!',
                        'AGREE TO DISAGREE',
                        'KNOW UR #\'S',
                        'R U A PRODUCT GENIUS?',
                        'SALES BOOSTER'];
    }else if (game == "March On"){
      this.game_desc = "";
      this.sub_game = ['quiz me',
                      'Get to know PINK',
                      'March on TEST game'];
    } else {
      this.game_desc = "";
      this.sub_game = [ 'Quiz Me',
                        'White Tea QuizMe'];
    }
      //this.game_desc = 
     // this.select_game = this.game_cat_detail.title[game];
      //this.game_desc = this.game_cat_detail['title'];
      //console.log(this.game_desc);
  
  }
  showDesc(game:string){

  }

  clicked(event) {
    console.log('Clicked', event.target.innerHTML, event.target);
    
  }

  
}