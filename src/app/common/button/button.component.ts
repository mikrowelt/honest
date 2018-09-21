import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input()
  public text: string;

  @Input()
  public icon: string;

  @Input()
  public modifiers: string[] = [];

  @HostBinding('class')
  private get modifierClasses(): string {
    const hasText = this.text
      ? ''
      : 'honest-button_no-text';
    return this.modifiers.reduce((classNames, modifier) => {
      return classNames + `honest-button_${modifier} `;
    }, 'honest-button ') + hasText;
  }

  public iconClass: string;

  constructor() { }

  ngOnInit() {
    if (this.icon) {
      this.iconClass = 'honest-button__icon fas ' + this.icon;
    }
  }

}
