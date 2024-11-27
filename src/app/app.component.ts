import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgxGoogleAnalyticsModule } from '@hakimio/ngx-google-analytics';
import { filter } from 'rxjs';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { FooterComponent } from './components/footer/footer.component';

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
export class AppComponent {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.router.events
      .pipe(
        filter(
          (event) =>
            isPlatformBrowser(this.platformId) &&
            event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => {
        this.document.defaultView?.scrollTo(0, 0);
      });
  }
}
