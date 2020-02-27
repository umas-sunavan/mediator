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

  isPanRight:boolean = true
  allEventNews = this.mainBrowseService.getAllNewsInEvent
  private mouseHolding = false
  detectHolding

  ngOnInit() {
    console.log(this.allEventNews);
    this.activatedRouter.paramMap.subscribe( params => {
      console.log(this.mainBrowseService.getNewsInEvent(+params.get('eventId')));
    })
  }

  public clickSummary = () => {
    console.log('clicked');
  }

  panRight = (isRight: boolean) => { this.isPanRight = isRight}

  mousedown = (event: MouseEvent) => {
    this.mouseHolding = true
    console.log('down');
    // this.detectHolding = setInterval( () => {
    //   console.log(event.clientX, event.clientY);
    // }, 50)    
  }

  mouseOver = (event: MouseEvent) => {
    console.log('over');
    console.log(event.clientX, event.clientY);
  }

  mouseUp = () => {
    this.mouseHolding = false
    clearInterval(this.detectHolding)
    console.log('clear');
    

  }
}
