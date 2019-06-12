import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Game_Module } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'ngx-prepost',
  templateUrl: './prepost.component.html',
  styleUrls: ['./prepost.component.scss']
})
export class PrepostComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;
  game_module: Game_Module[] = [];

  constructor(private theme: NbThemeService, private gameService: GameService) {
    this.loadGameModule();
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      var dataStyle = { 
        normal: {
          color: function(params) {
              // build a color map as your need.
              var colorList = [
                '#75d6e8','#75d6e8'
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
              data:[10,30],
              itemStyle: dataStyle 
                
              ,
            
          },
        
      ]
      };
     
    });
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

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


}
