import { Component } from '@angular/core';
import { HealthcareComponent } from '../../containers/healthcare/healthcare.component';
import { AboutComponent } from "./components/about/about.component";
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AboutComponent, TestimonialsComponent, HealthcareComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
