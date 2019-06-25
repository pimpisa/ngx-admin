import { ChangeDetectionStrategy, Component, Input, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Game_Module, Game } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { takeWhile } from 'rxjs/operators';


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
  @Input() maxValue: number;

  private alive = true;
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
  selectedUserIds: number[];
  public listData: any[];
  public scoreData: any[];
  public maxData = [];
  public trimList: string[];
  
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
    console.log(this.selectedModule);
    
  }

  loadChart(module, score){

    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        const countriesTheme: any = config.variables.countryOrders;
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
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 'normal',
           },
      }
    }  
    };
    this.options = Object.assign({}, {
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
      },
      xAxis: {
        axisLabel: {
          color: countriesTheme.chartAxisTextColor,
          //fontSize: countriesTheme.chartAxisFontSize,
          fontSize: '12',
        },
        axisLine: {
          lineStyle: {
            color: countriesTheme.chartAxisLineColor,
            width: '2',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: countriesTheme.chartAxisSplitLine,
            width: '1',
          },
        },
      },
      yAxis: {
        data: this.trimList,
        axisLabel: {
          color: countriesTheme.chartAxisTextColor,
          fontSize: '12',
          //fontSize: countriesTheme.chartAxisFontSize,
        },
        axisLine: {
          lineStyle: {
            color: countriesTheme.chartAxisLineColor,
            width: '2',
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        { // For shadow
          type: 'bar',
          data: this.maxData,
          cursor: 'default',
          itemStyle: {
            normal: {
              color: countriesTheme.chartInnerLineColor,
            },
            opacity: 1,
          },
          barWidth: '40%',
          barGap: '-100%',
          barCategoryGap: '30%',
          animation: false,
          z: 1,
        },
        { // For bottom line
          type: 'bar',
          data: this.scoreData,
          cursor: 'default',
          itemStyle: {
            normal: {
              color: countriesTheme.chartLineBottomShadowColor,
            },
            opacity: 1,
          },
          barWidth: '40%',
          barGap: '-100%',
          barCategoryGap: '30%',
          z: 2,
        },
        {
          type: 'bar',
          barWidth: '35%',
          data: this.scoreData,
          cursor: 'default',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: countriesTheme.chartGradientFrom,
              }, {
                offset: 1,
                color: countriesTheme.chartGradientTo,
              }]),
            },
          },
          z: 3,
        },
      ],
    });
    });

  }

  ngOnInit(){
    
  }

  onClear(){
    this.listData = [];

  }

  showGraph(){
    var arr = [];
    console.log(this.selectedModule);
    this.listData =  this.selectedModule.map(x => x.title);
    this.trimList = this.listData.splice(0,10);
    this.scoreData =  this.selectedModule.map(x => x.overall);
    for (var i = 1; i <= this.selectedModule.length; i++) {
      arr.push(100);
    }
    this.maxData = arr;
    console.log("this max" + this.maxData);
    //this.maxData = this.selectedModule.length * 100;
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
