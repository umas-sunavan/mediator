import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {


  constructor() { }
  // validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;


  ngOnInit() {
  }


  validateDemo = () => {
    // this.validateBtnState = ClrLoadingState.LOADING
  }
}
