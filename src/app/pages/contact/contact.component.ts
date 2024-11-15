import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SITE_CONFIG } from '../../configs';

declare var grecaptcha: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  public captchaResponse: string | null = null;
  public captchaSiteKey = SITE_CONFIG['RECAPTCHA_SITE_KEY_DEV'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      (window as any)['onCaptchaSuccess'] = (response: string) =>
        this.onCaptchaSuccess(response);
    }
  }

  onCaptchaSuccess(response: string): void {
    this.captchaResponse = response; // Save the token
    console.log('CAPTCHA resolved:', response);
    // Send the response to your backend for verification
  }
}
