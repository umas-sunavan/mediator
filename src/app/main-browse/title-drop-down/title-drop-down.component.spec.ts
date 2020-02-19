import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDropDownComponent } from './title-drop-down.component';

describe('TitleDropDownComponent', () => {
  let component: TitleDropDownComponent;
  let fixture: ComponentFixture<TitleDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
