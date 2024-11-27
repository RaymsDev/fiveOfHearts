import { Component, OnInit } from '@angular/core';
import { Healthcare } from '../../models/healthcare.model';
import { HealthcareService } from '../../services/healthcare.service';
import { ListComponent } from './components/list/list.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { SelectedOfficeComponent } from './components/selected-office/selected-office.component';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'app-healthcare-page',
  standalone: true,
  imports: [
    ListComponent,
    IntroductionComponent,
    SelectedOfficeComponent,
    FilterComponent,
  ],
  templateUrl: './healthcare-page.component.html',
  styleUrls: ['./healthcare-page.component.scss'],
  providers: [HealthcareService],
})
export class HealthcarePageComponent implements OnInit {
  healthcareData: Healthcare[] = [];
  filteredHealthcareData: Healthcare[] = [];
  selectedOffice: string = '';

  readonly offices = [
    {
      id: 'Saint Léger Triey',
      label: 'Cabinet de Saint Léger Triey',
      adress: '7 rue haute, 21556 Saint-Léger-Triey',
    },
    {
      id: 'Quetigny',
      label: 'Centre TherrAzur Quetigny',
      adress: '14 Rue du Golf, 21800 Quetigny',
    },
    {
      id: 'Chez Socha',
      label: 'Cabinet de Saint Apollinaire, Chez Socha',
      adress: '236 Rue des Clairs Logis, 21850 Saint-Apollinaire',
    },
    { id: 'Entreprise', label: 'Dans vos locaux' },
  ];

  constructor(private _healthcareService: HealthcareService) {}

  ngOnInit(): void {
    this._healthcareService
      .getHealthcareContent()
      .subscribe((data: Healthcare[]) => {
        this.healthcareData = data;
        this.filteredHealthcareData = this.getFilteredHealthcareData('');
      });
  }

  filterByOffice(officeId: string): void {
    this.selectedOffice = officeId;
    this.filteredHealthcareData = this.getFilteredHealthcareData(officeId);
  }

  getFilteredHealthcareData(office: string): Healthcare[] {
    if (office) {
      return this.healthcareData.filter(
        (item) => item.prices[office] && item.prices[office] !== 'NO',
      );
    }
    return this.healthcareData.filter((item) =>
      Object.values(item.prices).some((price) => price !== 'NO'),
    );
  }

  get selectedOfficeLabel(): string {
    return (
      this.offices.find((office) => office.id === this.selectedOffice)?.label ||
      ''
    );
  }
  get selectedOfficeAdress(): string {
    return (
      this.offices.find((office) => office.id === this.selectedOffice)
        ?.adress || ''
    );
  }
}
