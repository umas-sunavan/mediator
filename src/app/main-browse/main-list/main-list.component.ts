import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { MainBrowseService } from '../main-browse-service/main-browse.service';
import { Event, News } from 'src/app/object-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {


  constructor(
    private mainBrowseService: MainBrowseService,
    private router: Router
  ) { }
  // validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  private events:Event[] = this.mainBrowseService.getEventsList
  private news:News[] = this.mainBrowseService.getUngroupNewsList
  private displayType:string = this.mainBrowseService.getMainDisplayType

  ngOnInit() {

  }

  validateDemo = () => {
    // this.validateBtnState = ClrLoadingState.LOADING
  }

  clickEvent = (eventIndex) => {
    console.log('clicked ' + this.events[eventIndex].title);
  }
}
