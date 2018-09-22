import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SimpleModalComponent} from "ngx-simple-modal";
import {Subject} from "rxjs/Subject";

export interface CaptchaConfig {
  error: Subject<string>
  success: Subject<boolean>
  output: Subject<string>
}

@Component({
  selector: 'honest-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'honest-captcha'
  }
})
export class CaptchaComponent extends SimpleModalComponent<CaptchaConfig, string> implements CaptchaConfig, OnInit {

  public error: Subject<string>;

  public errorMsg: string;

  public success: Subject<boolean>;

  public output: Subject<string>;

  @Output()
  public captchaKey = new EventEmitter<string>();

  ngOnInit() {
    this.error.subscribe((error) => {
      this.errorMsg = error;
    })
  }

  resolved(captchaKey) {
    this.output.next(captchaKey);
  }

}
