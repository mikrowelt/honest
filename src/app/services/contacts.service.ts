import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {}

  public sendContactForm(
    name: string,
    email: string,
    description: string,
    captchaKey: string
  ): Observable<any> {
    return this.http.post(environment.host + '/api/contact-us', {
      name,
      email,
      description,
      'g-recaptcha-response': captchaKey
    });
  }
}
