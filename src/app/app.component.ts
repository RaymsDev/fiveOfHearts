import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxGoogleAnalyticsModule } from '@hakimio/ngx-google-analytics';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxGoogleAnalyticsModule,
    FooterComponent,
    BurgerMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
