import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SITE_CONFIG } from '../../configs';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
})
export class MainBannerComponent {
  public bookingUrl: string = SITE_CONFIG['BOOKING'];
}
