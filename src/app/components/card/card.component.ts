import { Component, Input } from '@angular/core';
import { Healthcare } from '../../models/healthcare.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() healthcareItem!: Healthcare;
}
