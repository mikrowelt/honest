import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { WindowRef } from '../window-ref';

@Component({
  selector: 'honest-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'className'
  }
})
export class NavBarComponent implements OnInit {

  private static EMPTY_CLASS = 'honest-nav-bar';
  private static FIXED_CLASS = 'honest-nav-bar honest-nav-bar_fixed';
  private static OFFSET = 75;

  public className: String = NavBarComponent.EMPTY_CLASS;

  constructor(private windowRef: WindowRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.className = this.windowRef.nativeWindow.pageYOffset > NavBarComponent.OFFSET
      ? NavBarComponent.FIXED_CLASS
      : NavBarComponent.EMPTY_CLASS;
  }

}
