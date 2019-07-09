import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../interfaces/game';
import { AdminGameDemosComponent } from '../../admin-game-demos/admin-game-demos.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

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
  ans = [
    {id: 1, name: 'media/spin/PRODUCTS/suzie_product_group.png'},
    {id: 2, name: 'media/spin/PRODUCTS/suzie_product_group2.png'},
    {id: 3, name: 'media/spin/PRODUCTS/suzie_product_group3.png'}
  ];
  //Color Picker
  public fontColor = "#2883e9";
  public resultColor = "#2883e9";
  public processColor = "#2883e9";
  //Font Family
  fonts = [
    {id: 1, name: 'Default'},
    {id: 2, name: 'Helvetica'},
    {id: 3, name: 'Raleway Light'},
    {id: 3, name: 'Raleway'},
    {id: 3, name: 'Open Sans'},
    {id: 3, name: 'Gotham'},
    {id: 3, name: 'Futura'},
    {id: 3, name: 'Akzidenz-Grotesk BQ'}
  ];

  constructor(private fb: FormBuilder,private gameService: GameService, public vcRef: ViewContainerRef, private cpService: ColorPickerService) { }

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
  addAns(){
    console.log("addAns");
    this.ans.push({id: null,name: ''});
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

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }

  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

}
