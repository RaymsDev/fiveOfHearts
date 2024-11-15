import { Component, OnInit } from '@angular/core';
import { HealthcareService } from '../../services/healthcare.service';
import { Healthcare } from '../../models/healthcare.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.scss'
})
export class HealthcareComponent implements OnInit {
  healthcareData: Healthcare[] = [];

  constructor(private _healthcareService: HealthcareService) { }

  ngOnInit() {
    this._healthcareService.getHealthcareContent().subscribe((data: Healthcare[]) => {
      this.healthcareData = data;
    });
  }
}
