import { ChangeDetectionStrategy, Input, Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Game_Module, Game } from '../../interfaces/game';
import { GameService } from '../../services/game.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

export interface Game_Group {
  title: string;
  id: number;
}

@Component({
  selector: 'ngx-edgage-game',
  templateUrl: './edgage-game.component.html',
  styleUrls: ['./edgage-game.component.scss']
})
export class EdgageGameComponent implements OnInit {
  game_module: Game_Module[] = [];
  game_group = [
    {id: 1, name: 'Other'},
    {id: 2, name: 'Web Session'},
    {id: 3, name: 'YSL'},
    {id: 4, name: 'Test Group'}
  ];
  selectedModule: Game_Module[];
  selectedGroup : Game_Group[] = [];
  form: FormGroup;
  range: NbCalendarRange<Date>;

  //private selectedGroup: Game_Group[];
  @Input() isBig: boolean = true;
  @Input() value: number = 0;
  @Input() color: string = 'green';

  classes = [];

  constructor(private gameService: GameService, private fb: FormBuilder,protected dateService: NbDateService<Date>) { 

    this.loadGameModule();
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };

  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

  loadGameModule(){
    this.gameService.getGameModule()
     .subscribe((gm:Game_Module[]) => {
      this.game_module = gm['data'].data;
     })
 }

 changeGame(game){
   console.log("game that got selected:" + JSON.stringify(game));
 }
 changeGroup(group){
  console.log("group that got selected:" + JSON.stringify(group));
}

/*public onSelectAll() {
  const selected = this.selectedModule.map(item => item.id);
  this.form.get('example').patchValue(selected);
}*/

public onSelectAll() {
  const selected = this.game_group.map(item => item.id);
  this.form.get('example').patchValue(selected);
}

public onClearAll() {
  this.form.get('example').patchValue([]);
}

public ngOnInit() {
  this.form = this.fb.group({
    example: ''
  })
}

}
