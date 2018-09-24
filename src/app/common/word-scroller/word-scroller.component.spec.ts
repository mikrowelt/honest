import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordScrollerComponent } from './word-scroller.component';

describe('WordScrollerComponent', () => {
  let component: WordScrollerComponent;
  let fixture: ComponentFixture<WordScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
