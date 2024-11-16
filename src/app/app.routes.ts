import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PricesComponent } from './pages/prices/prices.component';
import { SessionComponent } from './pages/session/session.component';

import { MassageComponent } from './pages/massage/massage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'healthcare', component: HealthcareComponent },
  // {path: 'healthcare/:id', component: HealthcareComponent},
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'session', component: SessionComponent },
  { path: 'massage/:type', component: MassageComponent },
  { path: '**', redirectTo: '' },
];
