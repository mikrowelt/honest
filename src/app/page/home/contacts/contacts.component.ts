import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-contacts'
  }
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
