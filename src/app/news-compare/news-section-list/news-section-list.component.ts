import { Component, OnInit } from '@angular/core';
import { MainBrowseService } from 'src/app/main-browse/main-browse-service/main-browse.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-section-list',
  templateUrl: './news-section-list.component.html',
  styleUrls: ['./news-section-list.component.scss']
})
export class NewsSectionListComponent implements OnInit {

  constructor(
    private mainBrowseService: MainBrowseService,
    private activatedRouter: ActivatedRoute
  ) { }

  isPanLeft: boolean = false
  allEventNews = this.mainBrowseService.getAllNewsInEvent
  private mouseHolding = false
  detectHolding
  PANNED_LEFT_POSITION = -100
  ORIGIONAL_POSITION = 0
  POSITION_TO_PAN_LEFT = -100
  POSITION_TO_PAN_RIGHT = 100

  pagePosition = 0
  fingerPosition = 0
  transitionControl = '0.3s cubic-bezier(.19,.01,.28,.9);'

  ngOnInit() {
    console.log(this.allEventNews);
    this.activatedRouter.paramMap.subscribe(params => {
      console.log(this.mainBrowseService.getNewsInEvent(+params.get('eventId')));
    })
  }

  public clickSummary = () => {
    console.log('clicked');
  }


  onPan = (event) => {
    console.log('pan', event.center.x, event.center.x);
  }

  onPanStart = (event) => {
    this.moveSmooth(false)
    this.pagePosition = this.isPanLeft ? this.PANNED_LEFT_POSITION: this.ORIGIONAL_POSITION
  }

  onPanLeft = (event) => this.fingerPosition = event.deltaX * 1

  onPanRight = (event) => this.fingerPosition = event.deltaX * 1

  onPanEnd = (event) => {
    if (this.fingerPosition < this.POSITION_TO_PAN_LEFT) {
      this.defineIsPanLeft(true)
    } else if (this.fingerPosition > this.POSITION_TO_PAN_RIGHT) {
      this.defineIsPanLeft(false)
    }

    this.positioningPage()
    this.resetFingerPosition()
    this.moveSmooth(true)
  }

  defineIsPanLeft = (shouldPanLeft:boolean) => {this.isPanLeft = shouldPanLeft}

  positioningPage = () => this.pagePosition = this.isPanLeft ? this.PANNED_LEFT_POSITION : this.ORIGIONAL_POSITION

  resetFingerPosition = () => this.fingerPosition = 0

  moveSmooth = (shouldSmooth:boolean) => this.transitionControl = shouldSmooth ? '0.3s cubic-bezier(.19,.01,.28,.9)' : 'none'
}
