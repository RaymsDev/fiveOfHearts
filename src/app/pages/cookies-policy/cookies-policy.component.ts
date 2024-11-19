import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookiePolicy } from '../../models/legal.model';
import { Subject, takeUntil } from 'rxjs';
import { LegalService } from '../../services/legal.service';

@Component({
  selector: 'app-cookies-policy',
  standalone: true,
  imports: [],
  templateUrl: './cookies-policy.component.html',
  styleUrl: './cookies-policy.component.scss',
})
export class CookiesPolicyComponent implements OnInit, OnDestroy {
  cookiePolicy: CookiePolicy[] = [];
  objectKeys = Object.keys;
  destroy$ = new Subject<void>();

  constructor(private legalService: LegalService) {}

  ngOnInit() {
    this.legalService
      .getCookiePolicy()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.cookiePolicy = data;
      });
    console.log('Cookies Policy: ', this.cookiePolicy);
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
