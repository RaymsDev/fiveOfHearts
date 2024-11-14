import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
