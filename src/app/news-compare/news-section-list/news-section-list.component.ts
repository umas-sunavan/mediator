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

  clientX = 0
  clientY = 0
  deltaX = 0
  deltaY = 0
  clientStartX = 0
  clientStartY = 0

  ngOnInit() {
    console.log(this.allEventNews);
    this.activatedRouter.paramMap.subscribe(params => {
      console.log(this.mainBrowseService.getNewsInEvent(+params.get('eventId')));
    })
  }

  public clickSummary = () => {
    console.log('clicked');
  }

  mouseDown = (event: MouseEvent) => {
    console.log(event.offsetX, event.offsetY);
  }

  mouseOver = (event: MouseEvent) => {
    console.log(event.offsetX, event.offsetY);

  }

  onPan = (event) => {
    console.log('pan', event.center.x, event.center.x);
  }

  touchStart = (event) => {
    this.clientStartX = event.touches[0].clientX
    this.clientStartY = event.touches[0].clientY
    console.log('houch start');
    
  }

  touchMove = (event) => {
    this.deltaX = this.clientX - this.clientStartX
    this.deltaY = this.clientY - this.clientStartY
    console.log('touchMove', event.touches[0].clientX, event.touches[0].clientY, this.deltaX, this.deltaY);
    this.clientX = event.touches[0].clientX
    this.clientY = event.touches[0].clientY
    if (this.deltaX > 30 && Math.abs(this.deltaY) < 90 ) this.onPanRight({deltaX:this.deltaX})
    if (this.deltaX < -30 && Math.abs(this.deltaY) < 90 ) this.onPanLeft({deltaX:this.deltaX})
  }

  onPanStart = (event) => {
    this.moveSmooth(false)
    this.pagePosition = this.isPanLeft ? this.PANNED_LEFT_POSITION : this.ORIGIONAL_POSITION
    console.log('pan start');

  }

  onPanLeft = (event) => {
    this.fingerPosition = event.deltaX * 1
  }

  onPanRight = (event) => {
    this.fingerPosition = event.deltaX * 1
  }

  onPanEnd = (event) => {
    if (this.fingerPosition < this.POSITION_TO_PAN_LEFT) {
      this.defineIsPanLeft(true)
    } else if (this.fingerPosition > this.POSITION_TO_PAN_RIGHT) {
      this.defineIsPanLeft(false)
    }

    this.positioningPage()
    this.resetFingerPosition()
    this.moveSmooth(true)
    console.log('pan end');
  }

  panDown = () => {
    console.log('down');

  }

  panUp = () => {
    console.log('up');

  }

  click = () => {
    console.log('click');

  }

  defineIsPanLeft = (shouldPanLeft: boolean) => { this.isPanLeft = shouldPanLeft }

  positioningPage = () => this.pagePosition = this.isPanLeft ? this.PANNED_LEFT_POSITION : this.ORIGIONAL_POSITION

  resetFingerPosition = () => this.fingerPosition = 0

  moveSmooth = (shouldSmooth: boolean) => this.transitionControl = shouldSmooth ? '0.3s cubic-bezier(.19,.01,.28,.9)' : 'none'
}
