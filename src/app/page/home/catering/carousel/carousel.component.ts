import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CateringPromoModel} from "../../../../models/catering-promo.model";

@Component({
  selector: 'honest-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-carousel'
  }
})
export class CarouselComponent implements OnInit {

  @Input()
  public cateringPromoModels: CateringPromoModel[];

  private currentSlide: number = 1;

  constructor() { }

  ngOnInit() {
  }

  public nextSlide(): void {
    const nextSlide = this.currentSlide + 1 > this.cateringPromoModels.length
      ? 1
      : this.currentSlide + 1;
    this.currentSlide = nextSlide;
    console.log('next', this.currentSlide);
  }

  public prevSlide(): void {

    const prevSlide = this.currentSlide - 1 < 1
      ? this.cateringPromoModels.length
      : this.currentSlide - 1;
    this.currentSlide = prevSlide;
    console.log('prev', this.currentSlide);
  }

  public getOffsetStyle(): any {
    return {
      transform: `translateX(${-(this.currentSlide - 1) * 350}px)`
    }
  }


}
