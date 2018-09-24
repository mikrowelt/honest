import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, animation, keyframes, style} from "@angular/animations";

@Component({
  selector: 'honest-word-scroller',
  templateUrl: './word-scroller.component.html',
  styleUrls: ['./word-scroller.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-carousel'
  }
})
export class WordScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private generateAnimation(words) {
    return animation([
      style({ top: '0em' }),
      animate(
        '{{ timings }}',
        keyframes(
          words.map((_, i) => style({ top: i + 'em', offset: (i || 1) / ((words.length - i) || 1) }))
        )
      )
    ]);
  }

}
