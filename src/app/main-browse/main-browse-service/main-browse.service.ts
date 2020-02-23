import { Injectable } from '@angular/core';
import { Events, News } from 'src/app/object-type';

@Injectable({
  providedIn: 'root'
})
export class MainBrowseService {

  constructor() { }

  /**
  * Types available: 'news', 'events'
  */
  private displayType = 'events'

  private events: Events[] = [
    {
      title: '世界經濟論壇',
      agencies: ['自由', 'ETToday', '今日', '中天'],
      tagCount: 16,
      lastUpdate: '2020-01-21',
    },
    {
      title: '索羅門 台灣 斷交',
      agencies: ['自由', '中時', '今日', '端傳媒'],
      tagCount: 16,
      lastUpdate: '2020-01-23',
    },
    {
      title: '中共 軍機 巴士海峽',
      agencies: ['自由', 'ETToday', '中時', '今日', '中天'],
      tagCount: 16,
      lastUpdate: '2020-01-24',
    },
    {
      title: '黑鷹 直升機 參謀總長',
      agencies: ['自由', 'ETToday', 'UDN', '中時', '今日', '中天'],
      tagCount: 16,
      lastUpdate: '2020-01-24',
    },
  ]

  private news: News[] = [
    {
      title: '比SARS還慘！ 觀光業上半年慘澹 學者估計最快8月復甦',
      agency: '中時電子報',
      topicType: '政治',
      lastUpdate: '2020-01-24',
    },
    {
      title: '買口罩也要挑日子！實名制上路一家口罩分組行動？',
      agency: '聯合新聞網',
      topicType: '政治',
      lastUpdate: '2020-01-24',
    },
    {
      title: '挺罷韓 海外高雄人花千元寄回連署書',
      agency: '今日新聞',
      topicType: '政治',
      lastUpdate: '2020-01-24',
    },
    {
      title: '賴清德會晤美國會議員 盼台美更緊密合作',
      agency: '今日新聞',
      topicType: '政治',
      lastUpdate: '2020-01-24',
    },
    {
      title: '「回家真好」台胞激動睡不著 聲聲感謝',
      agency: '聯合新聞網',
      topicType: '政治',
      lastUpdate: '2020-01-24',
    },
    {
      title: '「回家真好」台胞激動睡不著 聲聲感謝',
      agency: '聯合新聞網',
      topicType: '政治',
      lastUpdate: '2020-01-24',
    },
  ]

  get getEvents() { return this.events }
  get getNews() { return this.news }
  get getDisplayType() { return this.displayType }
  set setDisplayType(type: string) {
    console.log(type);
    this.displayType = type
  }

}
