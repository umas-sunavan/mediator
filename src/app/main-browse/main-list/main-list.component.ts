import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { MainBrowseService } from '../main-browse-service/main-browse.service';
import { Events, News } from 'src/app/object-type';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {


  constructor(
    private mainBrowseService: MainBrowseService
  ) { }
  // validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  private events:Events[] = this.mainBrowseService.getEvents
  private news:News[] = this.mainBrowseService.getNews
  private displayType:string = this.mainBrowseService.getDisplayType

  ngOnInit() {

  }


  validateDemo = () => {
    // this.validateBtnState = ClrLoadingState.LOADING
  }
}
