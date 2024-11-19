import { Component, OnDestroy, OnInit } from '@angular/core';
import { LegalMention } from '../../models/legal.model';
import { LegalService } from '../../services/legal.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-legal-mentions',
  standalone: true,
  imports: [],
  templateUrl: './legal-mentions.component.html',
  styleUrl: './legal-mentions.component.scss',
})
export class LegalMentionsComponent implements OnInit, OnDestroy {
  legalMentions: LegalMention[] = [];
  destroy$ = new Subject<void>();
  objectKeys = Object.keys;

  constructor(private legalService: LegalService) {}

  ngOnInit() {
    this.legalService
      .getLegalMentions()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.legalMentions = data;
      });
  }

  isString(value: unknown): value is string {
    return this.legalService.isString(value);
  }

  isObject(value: unknown): value is { [key: string]: string } {
    return this.legalService.isObject(value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
