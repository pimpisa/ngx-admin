import { Component, TemplateRef, ViewChild, Input, ViewContainerRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../interfaces/game';
import { AdminGameDemosComponent } from '../../admin-game-demos/admin-game-demos.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import  { GameDetailComponent } from '../game-detail.component';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() revealed: GameDetailComponent;
  public intro:boolean = false;
  public previewGame:boolean = false;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
  fifthForm: FormGroup;

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
  public submitBtnColor = "#2883e9";
  public arrowColor = "#2883e9";
  public introBgColor = "#2883e9";
  public introBtnColor = "#2883e9";
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
  bgType = [
    {id: 1, name: 'Color'},
    {id: 2, name: 'Image'},
    {id: 3, name: 'HTML'},
  ];
  bgSize = [
    {id: 1, name:'Cover'},
    {id: 2, name:'Contain'},
    {id: 3, name:'Repeat'},
    {id: 4, name:'Repeat X'},
    {id: 5, name:'Repeat Y'}
  ];
  bgPosition = [
    {id: 1, name:'Left top'},
    {id: 2, name:'Left center'},
    {id: 3, name:'Left bottom'},
    {id: 4, name:'Right top'},
    {id: 5, name:'Right center'},
    {id: 6, name:'Right bottom'},
    {id: 7, name:'Center top'},
    {id: 8, name:'Center center'},
    {id: 9, name:'Center bottom'}
  ];
  btnStyle = [
    {id: 1, name:'Rectangle'},
    {id: 2, name:'Pink Brush'}
  ];
  arrwStyle = [
    {id: 1, name:'Arrow1'},
    {id: 2, name:'Arrow2'},
    {id: 3, name:'Circle Fill'},
    {id: 4, name:'Circle Stoke'}
  ];
  arrwPosition = [
    {id: 1, name:'Middle'},
    {id: 2, name:'Bottom'}
  ];
  instrType = [
    {id: 1, name:'None'},
    {id: 1, name:'Image'},
    {id: 1, name:'Video'},
    {id: 1, name:'Audio'}
  ];

  //@ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  //@ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private fb: FormBuilder,private gameService: GameService, 
    public vcRef: ViewContainerRef, private cpService: ColorPickerService,
    private windowService: NbWindowService) { }

  ngOnInit() {
   // this.loadGame();
    
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
    this.fourthForm = this.fb.group({
      fourthCtrl: ['', Validators.required],
    });
    this.fifthForm = this.fb.group({
      fifthCtrl: ['', Validators.required],
    });

  }

  

  toggle() {
    console.log("toggle called");
    this.intro = !this.intro;
  }

  toggleView() {
    console.log("toggleview-stepper"+this.revealed);
    //this.revealed = !this.revealed;
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

  /** loadGame(){
    this.gameService.getGame()
      .subscribe(
        data => {
          this.games = data['data'];
          console.log("gmas" + JSON.stringify(this.games));

        },
        error => console.log(error));
  }*/

  showIntro(){
    console.log("call show intro");
  }
  preview(){
    console.log("preview");
    this.previewGame = !this.previewGame;
  }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Preview',
        context: {
          text: 'Show Preview',
        },
      },
    );
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
