import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../configs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
    { label: 'Mentions légales', url: '#' },
    { label: 'Politique de confidentialité', url: '#' },
    { label: 'Politique de cookies', url: '#' },
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
}
