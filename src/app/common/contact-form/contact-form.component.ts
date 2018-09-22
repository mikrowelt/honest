import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {SimpleModalService} from "ngx-simple-modal";
import {CaptchaComponent, CaptchaConfig} from "../captcha/captcha.component";
import {ContactsService} from "../../services/contacts.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'honest-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'honest-contact-form'
  }
})
export class ContactFormComponent implements OnInit, CaptchaConfig {

  public error: Subject<string> = new Subject();

  public success: Subject<boolean> = new Subject();

  public output: Subject<string> = new Subject();

  public email: string;

  public name: string;

  public description: string;

  constructor(
    private simpleModalService: SimpleModalService,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.email && this.name && this.description) {
      this.simpleModalService.addModal(CaptchaComponent, {
        error: this.error,
        success: this.success,
        output: this.output
      } as CaptchaConfig)
        .subscribe();
      this.output.subscribe((captchaKey) => {
        this.contactsService.sendContactForm(this.name, this.email, this.description, captchaKey)
          .subscribe((response: any) => {
            console.log(response.responseDesc)
            if (response.responseCode === 1) {
              this.error.next(response.responseDesc);
            } else {
              this.success.next(true);
            }
          }, (error) => {
            console.error(error);
            this.error.next('Что-то пошло не так. Пажалуста попробуйте еще раз');
          });
      });
    }
  }

}
