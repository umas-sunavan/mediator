import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { MainBrowseService } from '../main-browse-service/main-browse.service';

@Component({
  selector: 'app-title-drop-down',
  templateUrl: './title-drop-down.component.html',
  styleUrls: ['./title-drop-down.component.scss']
})
export class TitleDropDownComponent implements OnInit {

  constructor(
    private mainBrowseService: MainBrowseService
  ) { }
  clrIfOpen: boolean
  displayTypeControl = this.mainBrowseService.getDisplayType

  ngOnInit(): void {
    this.clrIfOpen = false
  }

  switchDisplay = (type) => {
    this.mainBrowseService.setDisplayType = type === 'news' ? 'news' : 'events'
    this.displayTypeControl = type === 'news' ? 'news' : 'events'
  }


}
