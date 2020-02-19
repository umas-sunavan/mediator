import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-title-drop-down',
  templateUrl: './title-drop-down.component.html',
  styleUrls: ['./title-drop-down.component.scss']
})
export class TitleDropDownComponent implements OnInit {

  constructor() { }
  clrIfOpen: boolean

  ngOnInit(): void {
    this.clrIfOpen = false
  }


}
