import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MainBannerComponent } from "../../components/main-banner/main-banner.component";
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, MainBannerComponent, ServicesComponent, AboutComponent, TestimonialsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
