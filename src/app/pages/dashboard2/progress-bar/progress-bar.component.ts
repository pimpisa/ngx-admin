import { Component, NgModule, ViewChild, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Game_Module } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

export interface Participation {
  title: string;
  rate: number;
}
export interface PrePost {
  title: string;
  score: number;
}

@Component({
  selector: 'ngx-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent  {

  themeSubscription: any;
  //Drowdown Game
  selectedModule: Game_Module[];
  public gm:Game_Module[];
  game_module: Game_Module[] = [];
  cities4 = [];
  public listData: any[];
  public scoreData: any[];
  public maxData = [];
  public trimList: string[];
  selectedGame = [];
 
  progressInfoData: Participation[] = [
    {
      title: 'Accessed the platform',
      rate: 100,
    },
    {
      title: 'Entered the module',
      rate: 80,
    },
    {
      title: 'Began the game',
      rate: 60,
    },
    {
      title: 'Finished the game',
      rate: 40,
    },
    {
      title: 'Requested credit',
      rate: 20,
    }
  ];

  constructor(private gameService: GameService) { 
    this.loadGameModule();
    this.create10kCities();
  }

  loadGameModule(){
    this.gameService.getGameModule()
     .subscribe((gm:Game_Module[]) => {
      this.gm = gm['data'].data;
      //this.gm = gm[0]['data']['title'];
      this.game_module = gm['data'].data;
       console.log("gma=" + JSON.stringify(this.gm));
     })
  }

  onChange(selectedGame){
    console.log("OnChange" + this.selectedModule);
    
  }

  showGraph(){
    var arr = [];
    console.log("In show Graph"+this.selectedModule);
    this.listData =  this.selectedModule.map(x => x.title);
    this.trimList = this.listData.splice(0,10);
    this.scoreData =  this.selectedModule.map(x => x.overall);
   // this.prePostData = this.selectedModule.
    for (var i = 1; i <= this.selectedModule.length; i++) {
      arr.push(100);
    }
    this.maxData = arr;
    console.log("this max" + this.maxData);
    //this.maxData = this.selectedModule.length * 100;
  }

 // addCustomUser = (term) => ({id: term, name: term});
   
   private create10kCities() {
       this.cities4 = Array.from({length: 10000}, (value, key) => key)
                           .map(val => ({
                             id: val,
                             name: `city ${val}`
                           }));
   }

  ngOnInit() {
  }

 

}
