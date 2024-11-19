import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Healthcare } from '../../models/healthcare.model';
import { HealthcareService } from '../../services/healthcare.service';

@Component({
  selector: 'app-healthcare-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './healthcare-page.component.html',
  styleUrl: './healthcare-page.component.scss',
  providers: [HealthcareService],
})
export class HealthcarePageComponent implements OnInit {
  healthcareData: Healthcare[] = [];

  constructor(private _healthcareService: HealthcareService) {}

  ngOnInit() {
    this._healthcareService
      .getHealthcareContent()
      .subscribe((data: Healthcare[]) => {
        this.healthcareData = data;
      });
  }
}
