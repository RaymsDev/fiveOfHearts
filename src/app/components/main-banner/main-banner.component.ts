import { Component } from '@angular/core';
import { EXTERNAL_URL } from '../../configs';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
})
export class MainBannerComponent {
  public bookingUrl: string = EXTERNAL_URL['BOOKING'];
}
