import { Component, OnInit } from '@angular/core';
import {
  HealthAndBeautyBusiness,
  Offer,
  OfferCatalog,
  WithContext,
} from 'schema-dts';
import { Healthcare } from '../../models/healthcare.model';
import { HealthcareService } from '../../services/healthcare.service';
import { FilterComponent } from './components/filter/filter.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ListComponent } from './components/list/list.component';
import { SelectedOfficeComponent } from './components/selected-office/selected-office.component';

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
      address: '7 rue haute, 21556 Saint-Léger-Triey',
    },
    {
      id: 'Quetigny',
      label: 'Centre TherrAzur Quetigny',
      address: '14 Rue du Golf, 21800 Quetigny',
    },
    {
      id: 'Chez Socha',
      label: 'Cabinet de Saint Apollinaire, Chez Socha',
      address: '236 Rue des Clairs Logis, 21850 Saint-Apollinaire',
    },
    { id: 'Entreprise', label: 'Dans vos locaux' },
  ];
  healthcareService: WithContext<HealthAndBeautyBusiness> | undefined;

  constructor(private _healthcareService: HealthcareService) {}
  private isOffer(item: unknown): item is Offer {
    return !!item && (item as Offer)?.['@type'] === 'Offer';
  }

  ngOnInit(): void {
    this._healthcareService
      .getHealthcareContent()
      .subscribe((data: Healthcare[]) => {
        this.healthcareData = data;
        this.filteredHealthcareData = this.getFilteredHealthcareData('');
      });
  }

  isHealthAndBeautyBusiness(item: unknown): item is HealthAndBeautyBusiness {
    return (
      !!item &&
      typeof item === 'object' &&
      (item as any)?.['@type'] === 'HealthAndBeautyBusiness'
    );
  }

  hasOfferCatalog(item: unknown): item is OfferCatalog {
    return !!item && (item as OfferCatalog)?.['@type'] === 'OfferCatalog';
  }

  get offers(): Offer[] {
    return this.isHealthAndBeautyBusiness(this.healthcareService) &&
      this.hasOfferCatalog((this.healthcareService as any).hasOfferCatalog)
      ? (
          ((this.healthcareService as any).hasOfferCatalog as any)
            .itemListElement as Offer[]
        )?.filter(this.isOffer)
      : [];
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
        ?.address || ''
    );
  }
}
