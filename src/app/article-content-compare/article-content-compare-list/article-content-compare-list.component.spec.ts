import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContentCompareListComponent } from './article-content-compare-list.component';

describe('ArticleContentCompareListComponent', () => {
  let component: ArticleContentCompareListComponent;
  let fixture: ComponentFixture<ArticleContentCompareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleContentCompareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleContentCompareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
