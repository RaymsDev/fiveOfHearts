import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../configs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public facebookUrl: string = SITE_CONFIG['FACEBOOK'];
  public googleUrl: string = SITE_CONFIG['GOOGLE'];
}
