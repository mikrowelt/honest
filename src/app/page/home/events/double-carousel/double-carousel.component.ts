import {
  Component, Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-double-carousel',
  templateUrl: './double-carousel.component.html',
  styleUrls: ['./double-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-double-carousel'
  }
})
export class DoubleCarouselComponent implements OnInit {

  @Input()
  public images: string[];

  private currentSlide: number = 2;

  constructor() { }

  ngOnInit() {
  }

  public nextSlide(): void {
    const nextSlide = this.currentSlide + 1 > this.images.length
      ? 2
      : this.currentSlide + 1;
    this.currentSlide = nextSlide;
    console.log('next', this.currentSlide);
  }

  public prevSlide(): void {

    const prevSlide = this.currentSlide - 1 < 2
      ? 2
      : this.currentSlide - 1;
    this.currentSlide = prevSlide;
    console.log('prev', this.currentSlide);
  }

  public getOffsetStyle(offset: number): any {
    return {
      transform: `translateX(${-(this.currentSlide + offset - 1) * 360}px)`
    }
  }

}
