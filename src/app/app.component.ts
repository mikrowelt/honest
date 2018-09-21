import {
  AfterContentInit,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'honest-app'
  }
})
export class AppComponent {
  title = 'app';
}
