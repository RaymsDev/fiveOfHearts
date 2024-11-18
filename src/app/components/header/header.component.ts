import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SITE_CONFIG } from '../../configs';
import { AnalyticsService } from '../../services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AnalyticsService],
})
export class HeaderComponent {
  public bookingUrl: string = SITE_CONFIG['BOOKING'];

  constructor(private analyticsService: AnalyticsService) {}

  onBookingClick(): void {
    this.analyticsService.trackEvent('booking', 'navbar');
  }
}
