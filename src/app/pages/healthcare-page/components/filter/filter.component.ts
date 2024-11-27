import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() offices: { id: string; label: string }[] = [];
  @Output() filter = new EventEmitter<string>();

  onFilter(officeId: string): void {
    this.filter.emit(officeId);
  }
}
