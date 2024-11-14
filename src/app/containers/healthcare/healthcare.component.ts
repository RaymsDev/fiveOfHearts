import { Component } from '@angular/core';
import { PregnantComponent } from '../../components/pregnant/pregnant.component';
import { MassagesComponent } from '../../components/massages/massages.component';
import { OtherServicesComponent } from "../../components/other-services/other-services.component";

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [MassagesComponent, PregnantComponent, OtherServicesComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.scss'
})
export class HealthcareComponent {

}
