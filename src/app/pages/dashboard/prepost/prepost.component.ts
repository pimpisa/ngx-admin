import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Game_Module } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'ngx-prepost',
  templateUrl: './prepost.component.html',
  styleUrls: ['./prepost.component.scss']
})
export class PrepostComponent implements OnInit {

  data: any;
  options: any;
  themeSubscription: any;
  game_module: Game_Module[] = [];
  module_name: string;
  selectedGame = [];
  //Dropdown
  games = new FormControl();
  arrBirds: string [];

  //

  cities4 = [];
  selectedCity: any;
    selectedModule: string[];
    //selectedCityName = 'Vilnius';
   // selectedCityId: number;
    selectedUserIds: number[];

  constructor(private theme: NbThemeService, private gameService: GameService) {
  
    this.loadGameModule();
    this.create10kCities();
    
      var dataStyle = { 
        normal: {
          color: function(params) {
              // build a color map as your need.
              var colorList = [
                '#75d6e8','#5E81F4','#3b3b95','#5e81f4'
              ];
              return colorList[params.dataIndex]
          },
          label: {
              show: true,
              position: 'right',
              formatter: '{b}\n{c}%',
              textStyle: {
                fontFamily: 'Arial',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'bold',
             },
        }
      }
        
      };
      this.options = {
        tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['leaderboard']
      },
     
      calculable : true,
      xAxis : [
          {
            show: false,
        
          }
      ],
      yAxis : [
          {
            type : 'category',
            data : ["Obj1", "Obj2"],
            axisLine: 5
          }
      ],
      series : [
          {
              name:'User score',
              type:'bar',
              data:[10,20],
              itemStyle: dataStyle,
          },
        
      ]
      };
     
  
  }

  ngOnInit(){
    
  }

  loadGameModule(){
    this.gameService.getGameModule()
      .subscribe(
       res => {
        this.game_module = res['data'].data;
        console.log("game_module:" + JSON.stringify(this.game_module));

        },
        error => console.log(error));
   }

  // addCustomUser = (term) => ({id: term, name: term});
    
    private create10kCities() {
        this.cities4 = Array.from({length: 10000}, (value, key) => key)
                            .map(val => ({
                              id: val,
                              name: `city ${val}`
                            }));
    }


}
