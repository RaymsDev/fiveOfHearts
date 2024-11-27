import { Component, OnDestroy, OnInit } from '@angular/core';
import { LegalService } from '../../services/legal.service';
import { Subject, takeUntil } from 'rxjs';
import { PrivacyPolicy } from '../../models/legal.model';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  privacyPolicy: PrivacyPolicy[] = [];
  objectKeys = Object.keys;
  destroy$ = new Subject<void>();

  constructor(private legalService: LegalService) {}

  ngOnInit() {
    this.legalService
      .getPrivacyPolicy()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.privacyPolicy = data;
      });
  }

  isString(value: unknown): value is string {
    return this.legalService.isString(value);
  }

  isObject(value: unknown): value is { [key: string]: string } {
    return this.legalService.isObject(value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
