import { Component, Input } from '@angular/core';
import { Healthcare } from '../../../../models/healthcare.model';
import { CardComponent } from '../../../../components/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() healthcareItems: Healthcare[] = [];
  @Input() selectedOffice: string = '';
}
