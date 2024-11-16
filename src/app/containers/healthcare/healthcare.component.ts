import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnergeticComponent } from '../../pages/homepage/components/energetic/energetic.component';
import { MassagesComponent } from '../../pages/homepage/components/massages/massages.component';
import { PregnantComponent } from '../../pages/homepage/components/pregnant/pregnant.component';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [
    MassagesComponent,
    PregnantComponent,
    EnergeticComponent,
    RouterModule,
  ],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.scss',
})
export class HealthcareComponent {}
