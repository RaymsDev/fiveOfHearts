import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { AboutComponent } from './pages/about/about.component';
import { SessionComponent } from './pages/session/session.component';

import { MassageComponent } from './pages/massage/massage.component';
import { LegalMentionsComponent } from './pages/legal-mentions/legal-mentions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'healthcare', component: HealthcareComponent },
  // {path: 'healthcare/:id', component: HealthcareComponent},
  { path: 'about', component: AboutComponent },
  { path: 'session', component: SessionComponent },
  { path: 'massage/:type', component: MassageComponent },
  { path: 'legal-mentions', component: LegalMentionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookies-policy', component: CookiesPolicyComponent },
  { path: '**', redirectTo: '' },
];
