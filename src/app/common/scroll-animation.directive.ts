import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[honestScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit{

  @Input()
  public toggleClass: string;

  @Input()
  public container: string;

  @Input()
  public offset: number = 300;

  private elOffset: number;

  private triggered: boolean = false;

  constructor(public el: ElementRef) {}

  ngOnInit() {
    const el = this.container
      ? document.querySelector(this.container)
      : this.el.nativeElement;
    const rect = el.getBoundingClientRect();
    this.elOffset = rect.top + (window.pageYOffset || document.documentElement.scrollTop);

  }

  @HostListener("window:scroll")
  public onWindowScroll(): void {
    if (this.triggered) return;
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= this.elOffset - this.offset) {
      this.el.nativeElement.classList.remove(this.toggleClass);
      this.triggered = true;
    }
  }

}
