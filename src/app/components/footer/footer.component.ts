import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../configs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  siteConfig = SITE_CONFIG;
  socialLinks = [
    { label: 'Facebook', url: SITE_CONFIG['FACEBOOK'] },
    { label: 'LinkedIn', url: SITE_CONFIG['LINKEDIN'] },
    { label: 'Réservation', url: SITE_CONFIG['BOOKING'] },
  ];
  otherLinks = [
    { label: 'Mentions légales', url: '/legal-mentions' },
    { label: 'Politique de confidentialité', url: '/privacy-policy' },
    { label: 'Politique de cookies', url: '/cookies-policy' },
  ]
  contactDetails = {
    address: SITE_CONFIG['ADDRESS'],
    phone: SITE_CONFIG['PHONE'],
    email: SITE_CONFIG['EMAIL'],
  };
  currentYear: number = new Date().getFullYear();

  encodeAddress(address: string): string {
    return encodeURIComponent(address);
  }

  encodeToBase64(data: string): string {
    return btoa(data);
  }

  decodeFromBase64(encodedData: string): string {
    return atob(encodedData);
  }
}
