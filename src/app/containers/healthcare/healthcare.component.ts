import { Component } from '@angular/core';
import { PregnantComponent } from '../../pages/homepage/components/pregnant/pregnant.component';
import { MassagesComponent } from '../../pages/homepage/components/massages/massages.component';
import { OtherServicesComponent } from "../../pages/homepage/components/other-services/other-services.component";
import { EnergeticComponent } from '../../pages/homepage/components/energetic/energetic.component';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [MassagesComponent, PregnantComponent, OtherServicesComponent, EnergeticComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.scss'
})
export class HealthcareComponent {

}
