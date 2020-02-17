import { Component, OnInit } from '@angular/core';
import { ClrLoadingState  } from '@clr/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  clrIfOpen: boolean

  ngOnInit() {
    this.clrIfOpen = false
  }

  validateDemo = () => {
    this.validateBtnState = ClrLoadingState.LOADING
  }

}
