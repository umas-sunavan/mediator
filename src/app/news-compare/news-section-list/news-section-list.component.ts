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

  allEventNews = this.mainBrowseService.getAllNewsInEvent

  ngOnInit() {
    console.log('Hi');
    console.log(this.allEventNews);
    this.activatedRouter.paramMap.subscribe( params => {
      console.log(this.mainBrowseService.getNewsInEvent(+params.get('eventId')));
    })
  }

}
