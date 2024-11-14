import { Component } from '@angular/core';
import { HealthcareComponent } from '../../containers/healthcare/healthcare.component';
import { AboutComponent } from "./components/about/about.component";
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AboutComponent, TestimonialsComponent, HealthcareComponent, MainBannerComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
