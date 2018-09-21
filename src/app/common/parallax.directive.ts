import {
  Directive,
  Input,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[honestParallax]'
})
export class ParallaxDirective {

  @Input('ratio')
  public parallaxRatio : number = 1;

  private clientHeight : number = 0;

  constructor(private eleRef : ElementRef) {
    this.setBounds();
  }

  private setBounds() {
    this.clientHeight = window.innerHeight;
  }

  @HostListener("window:scroll")
  public onWindowScroll(): void {
    const top = this.eleRef.nativeElement.parentElement.getBoundingClientRect().top;
    if (top < this.clientHeight) {
      this.eleRef.nativeElement.style.transform = `translateY(${(top + this.clientHeight) * this.parallaxRatio}px)`;
    }
  }

  @HostListener("window:resize")
  public onWindowResize(): void {
    this.setBounds();
  }
}
