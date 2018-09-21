import {
  Component, OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'honest-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-events'
  }
})
export class EventsComponent implements OnInit{

  public eventImages: string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.eventImages = data.eventImages;
    });
  }

}
