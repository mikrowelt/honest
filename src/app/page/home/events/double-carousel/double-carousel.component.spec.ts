import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCarouselComponent } from './double-carousel.component';

describe('DoubleCarouselComponent', () => {
  let component: DoubleCarouselComponent;
  let fixture: ComponentFixture<DoubleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
