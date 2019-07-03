import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../../../dragDrop.directive';

@Component({
  selector: 'ngx-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.scss']
})
export class EditWindowComponent implements OnInit {
  
  window: Object[];
  //File Upload
  name = 'Angular 5';
  files: FileHandle[] = [];

  window_sample: Object[] = [
    {
      header: "Game Detail",
      icon: "Percent Of Edgagement",
      title:"sell it to me!",
      desc: "Love a skincare challenge? Let's strengthen your selling skills by helping customers choose the best products for their skin concerns",
      right_head: "Games",
      right_msg: "123",
      width: 4,
    },
  ]

  access = [
    {id:1,title:"Guest"},
    {id:2,title:"Web Session"},
    {id:3,title:"Beauty Advisor"},
    {id:4,title:"Account Executive"},
    {id:5,title:"FSD Access"},
    {id:6,title:"Admin"},
    {id:7,title:"Hide"},
    {id:8,title:"Group"},
  ];
  special_instructions = [
    { value: '0', label: 'Hide in Report' },
    { value: '1', label: 'Retake Quiz' },
    { value: '2', label: 'Redeem Gift' },
  ];

  links = [
    {value: 'disabled', label: 'Pages'},
    {value: '5c8bd3b2088c8', label: 'spin game page'},
    {value: '5c8bd3b2088c8', label: 'SPOTLIGHT'},
    {value: 'disa5c8bd3b2088c8bled', label: 'MARCH ON'},
    {value: '5c8bd3b2088c8', label: 'BUZZ WORTHY'},
    {value: '5c8bd3b2088c8', label: 'HOW TO VIDEOS'},
    {value: '5c8bd3b2088c8', label: 'Gameboard'},
    {value: '5c8bd3b2088c8', label: 'PINK'},
    {value: '5c8bd3b2088c8', label: 'MARCH ON BACK UP PAGE'},
    {value: '5c8bd3b2088c8', label: 'DEEP DIVE'},
    {value: '5c8bd3b2088c8', label: 'PREVAGE DEEP DIVE'},
    {value: '5c8bd3b2088c8', label: 'RETINOL'},
    {value: '5c8bd3b2088c8', label: 'AHA'},
    {value: '5c8bd3b2088c8', label: 'RETINOL DEEP DIVE'},
    {value: '5c8bd3b2088c8', label: 'REWARDS'},
    {value: '5c8bd3b2088c8', label: 'WHITE TEA'},
  ];

  constructor() { 

  }

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }

  ngOnInit() {
  }

}
