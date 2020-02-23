import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSectionListComponent } from './news-section-list.component';

describe('NewsSectionListComponent', () => {
  let component: NewsSectionListComponent;
  let fixture: ComponentFixture<NewsSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
