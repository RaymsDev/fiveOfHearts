import { Component } from '@angular/core';
import { EXTERNAL_URL } from '../../configs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
})
export class MainBannerComponent {
  public bookingUrl: string = EXTERNAL_URL['BOOKING'];
}
