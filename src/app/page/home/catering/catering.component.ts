import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CateringPromoModel} from "../../../models/catering-promo.model";

@Component({
  selector: 'honest-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-catering'
  }
})
export class CateringComponent implements OnInit {

  public cateringPromos: CateringPromoModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.cateringPromos = data.cateringPromo;
    });
  }

}
