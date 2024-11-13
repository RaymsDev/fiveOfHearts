import { Component } from '@angular/core';
import { PregnantComponent } from '../../components/pregnant/pregnant.component';
import { MassagesComponent } from '../../components/massages/massages.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MassagesComponent, PregnantComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
