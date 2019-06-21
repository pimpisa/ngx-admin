import { ChangeDetectionStrategy, Component, Input, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Game_Module, Game } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

interface AngSelectEvent {
  name: string;
  value: number;
}


@Component({
  selector: 'ngx-prepost',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './prepost.component.html',
  styleUrls: ['./prepost.component.scss']
})
export class PrepostComponent implements OnInit {
  flipped = false;
  data: any;
  options: any;
  themeSubscription: any;
  game_module: Game_Module[] = [];
  module_name: string;
  selectedGame = [];
  //Dropdown
  games = new FormControl();
  arrBirds: string [];
  events: AngSelectEvent[] = [];
  public gm:Game_Module[];
  gm1: Game_Module;
  //
  game_overall: any;
  game_title: any;
  
  cities4 = [];
  selectedCity: any;
  selectedModule: Game_Module[];
    //selectedCityName = 'Vilnius';
   // selectedCityId: number;
  selectedUserIds: number[];
  public listData: any[];
  public scoreData: any[];
  //public listData = [100,20,38,78,49,20,48,20];
  //public module = ["Mobile Engagement","Module2","Module3","Module4","Module5","Module6","Module7","Module8"];
  @Input()
  @HostBinding('class.revealed')
  revealed: boolean = false;

  /**
   * Show/hide toggle button to be able to control toggle from your code
   * @type {boolean}
   */
  @Input() showToggleButton = true;

  constructor(private theme: NbThemeService, private gameService: GameService) {
    
    this.loadGameModule();
    this.create10kCities();
    
    //this.loadChart(this.module,this.listData)
  
  }

  onChange(selectedGame){
    //onChange($event){
     console.log(this.selectedModule);
    //console.log("event click" + title + overall);
    //this.events.push({ name: '(change)', value: $event });
    
    //console.log("event-names " + this.events['name'],"event-values " + this.events['value']);
    //console.log("event---- " + this.events.toString);
   // this.loadChart(,this.events['value']);
  }

  loadChart(module, score){
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
            position: 'top',
            formatter: '{c}%',
            textStyle: {
              fontFamily: 'sans-serif',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 'normal',
           },
      }
    }
      
    };
    this.options = {
      tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Game Module overall score']
    },
    toolbox: {
      show : true,
      feature : {
          saveAsImage : {show: true}
      }
   },
    calculable : true,
    xAxis : [
        {
          splitLine: {show: false},
          show: false,
        }
    ],
    yAxis : [
        {
          type : 'category',
          axisLabel: {show: true},
          data: module,
          axisLine: 5
        }
    ],
    series : [
        // For shadow
      {
        name:'User score',
        type:'bar',
        data: 100,
       // data: this.listData,
        itemStyle: {
          normal: {
            color: '#D3D3D3',
          },
          opacity: 1,
        },
        barWidth: '40%',
        barGap: '-100%',
        barCategoryGap: '10%',
      },
        {
          name:'User score',
          type:'bar',
          data: score,
         // data: this.listData,
          itemStyle: dataStyle,
          barWidth: '40%',
          barGap: '-100%',
          barCategoryGap: '10%',
          z: 2,
        },    
    ]
    };
  }

  ngOnInit(){
    
  }

  showGraph(){
    console.log(this.selectedModule);
    this.listData =  this.selectedModule.map(x => x.title);
    this.scoreData =  this.selectedModule.map(x => x.overall);
    this.loadChart(this.listData,this.scoreData)

  }

  toggleView() {
    this.flipped = !this.flipped;
  }
  /*loadGameModule(){
    this.gameService.getGameModule()
      .subscribe(
       res => {
        this.game_module = res['data'].data;
        console.log("game_module:" + JSON.stringify(this.game_module['title']));
       // this.listData = 
        },
        error => console.log(error));
   }*/
   loadGameModule(){
     this.gameService.getGameModule()
      .subscribe((gm:Game_Module[]) => {
       this.gm = gm['data'].data;
       //this.gm = gm[0]['data']['title'];
       this.game_module = gm['data'].data;
        console.log("gma=" + JSON.stringify(this.gm));
      })
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
