import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PricesComponent } from './pages/prices/prices.component';
import { SessionComponent } from './pages/session/session.component';
import { HolisticMassageComponent } from './pages/holistic-massage/holistic-massage.component';
import { EnergeticTreatmentComponent } from './pages/energetic-treatment/energetic-treatment.component';
import { PrenatalMassageComponent } from './pages/prenatal-massage/prenatal-massage.component';

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'healthcare', component: HealthcareComponent},
  // {path: 'healthcare/:id', component: HealthcareComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'session', component: SessionComponent},
  {path: 'holistic_massage', component: HolisticMassageComponent},
  {path: 'energetic_treatment', component: EnergeticTreatmentComponent},
  {path: 'prenatal_massage', component: PrenatalMassageComponent},
  {path: '**', redirectTo: ''}
];
