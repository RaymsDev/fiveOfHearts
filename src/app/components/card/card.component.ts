import { Component, Input, OnInit } from '@angular/core';
import { Healthcare } from '../../models/healthcare.model';
import { ButtonComponent } from '../button/button.component';
import { SITE_CONFIG } from '../../configs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() healthcareItem!: Healthcare;
  bookingUrl: string = '';

  ngOnInit() {
    this.bookingUrl = this.getBookingUrl();
  }

  private getBookingUrl(): string {
    switch (this.healthcareItem.title) {
      case 'Soins énergétiques':
        return SITE_CONFIG['ENERGETIC_CARE'];
      case 'Massage Holistique':
        return SITE_CONFIG['HOLISTIC_CARE'];
      case 'Micro massage crânien':
        return SITE_CONFIG['HEAD_MASSAGE'];
      case "Bougies d'oreille Hopi":
        return SITE_CONFIG['CANDLE_HOPI'];
      case 'Barrage des brûlures':
        return SITE_CONFIG['BURN_CARE'];
      case 'Massage Knap':
        return SITE_CONFIG['KNAP_MASSAGE'];
      default:
        return SITE_CONFIG['BOOKING'];
    }
  }
}
