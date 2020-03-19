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
  waitCount = 0
  /**
   * Three string parameters: 'right', 'left', 'up', 'down', 'notMoving'
  **/
  direction = 'notMove'
  isMouseDown = false

  ngOnInit() {
    console.log(this.allEventNews);
    this.activatedRouter.paramMap.subscribe(params => {
      console.log(this.mainBrowseService.getNewsInEvent(+params.get('eventId')));
    })
  }

  touchStart = (event: TouchEvent) => {
    this.recordClientXYStartPosition('touch',event)
    this.moveSmooth(false)
  }

  recordClientXYStartPosition = (eventType: string, event: TouchEvent | MouseEvent) => {
    let touchEvent: TouchEvent
    let mouseEvent: MouseEvent
    switch (eventType) {
      case 'touch':
        touchEvent = event
        this.clientStartX = touchEvent.touches[0].clientX
        this.clientStartY = touchEvent.touches[0].clientY
        break;
      case 'mouse':
        mouseEvent = event
        this.clientStartX = mouseEvent.clientX
        this.clientStartY = mouseEvent.clientY
        break;
    }
  }

  recordClientXYPosition = (eventType: string, event: TouchEvent | MouseEvent) => {
    let touchEvent: TouchEvent
    let mouseEvent: MouseEvent
    switch (eventType) {
      case 'touch':
        touchEvent = event
        this.clientX = touchEvent.touches[0].clientX
        this.clientY = touchEvent.touches[0].clientY
        break;
      case 'mouse':
        mouseEvent = event
        this.clientX = mouseEvent.clientX
        this.clientY = mouseEvent.clientY
        break;
    }
  }

  touchMove = (event: TouchEvent) => {
    this.recordClientXYPosition('touch', event)
    this.defineMovingDistance()
    if (this.waitTouchDirection()) {
      if (this.decided()) {
        this.moveAloneWithDirection(this.direction)
      } else {
        this.decideDirection(this.isFingerHorizontal())
        this.moveAloneWithDirection(this.direction)
      }
    } else {
      this.waitCount++
    }
    console.log(this.direction);
  }

  decided = () => this.direction !== 'notMove'

  decideDirection = (isHorizontal) => {
    this.direction =
      isHorizontal ?
        (this.isMoveLeft() ? 'left' : 'right') :
        (this.isMoveUp() ? 'up' : 'down')
  }

  isMoveLeft = () => this.deltaX < 0

  isMoveUp = () => this.deltaY < 0

  moveAloneWithDirection = (direction) => {
    switch (direction) {
      case 'right':
        event.preventDefault()
        this.onPanRight({ deltaX: this.deltaX })
        break;
      case 'left':
        event.preventDefault()
        this.onPanLeft({ deltaX: this.deltaX })
        break;
      case 'vertical':
        break;
    }
  }

  waitTouchDirection = (): boolean => this.waitCount > 2

  touchEnd = () => {
    this.waitCount = 0
    if (this.fingerPosition < this.POSITION_TO_PAN_LEFT) {
      this.defineIsPanLeft(true)
    } else if (this.fingerPosition > this.POSITION_TO_PAN_RIGHT) {
      this.defineIsPanLeft(false)
    }
    this.positioningPage()
    this.resetFingerPosition()
    this.moveSmooth(true)
    this.direction = 'notMove'
  }

  isFingerHorizontal = () => Math.abs(this.deltaX) > Math.abs(this.deltaY)

  defineMovingDistance = () => {
    this.deltaX = this.clientX - this.clientStartX
    this.deltaY = this.clientY - this.clientStartY
  }

  onPanLeft = (event) => {
    this.fingerPosition = event.deltaX * 1
  }

  onPanRight = (event) => {
    this.fingerPosition = event.deltaX * 1
  }

  mouseDown = (event: MouseEvent) => {
    this.isMouseDown = true
    this.recordClientXYStartPosition('mouse',event)
    this.moveSmooth(false)
  }

  mouseMove = (event: MouseEvent) => {
    if (this.isMouseDown) {

      this.recordClientXYPosition('mouse', event)
      this.defineMovingDistance()
      if (this.waitTouchDirection()) {
        if (this.decided()) {
          this.moveAloneWithDirection(this.direction)
        } else {
          this.decideDirection(this.isFingerHorizontal())
          this.moveAloneWithDirection(this.direction)
        }
      } else {
        this.waitCount++
      }
      console.log(this.direction);
    }
  }

  mouseUp = () => {
    this.isMouseDown = false
    this.waitCount = 0
    if (this.fingerPosition < this.POSITION_TO_PAN_LEFT) {
      this.defineIsPanLeft(true)
    } else if (this.fingerPosition > this.POSITION_TO_PAN_RIGHT) {
      this.defineIsPanLeft(false)
    }
    this.positioningPage()
    this.resetFingerPosition()
    this.moveSmooth(true)
    this.direction = 'notMove'
  }

  defineIsPanLeft = (shouldPanLeft: boolean) => { this.isPanLeft = shouldPanLeft }

  positioningPage = () => this.pagePosition = this.isPanLeft ? this.PANNED_LEFT_POSITION : this.ORIGIONAL_POSITION

  resetFingerPosition = () => this.fingerPosition = 0

  moveSmooth = (shouldSmooth: boolean) => this.transitionControl = shouldSmooth ? '0.3s cubic-bezier(.19,.01,.28,.9)' : 'none'
}
