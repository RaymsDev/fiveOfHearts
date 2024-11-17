import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LegalMention, PrivacyPolicy } from '../models/legal.model';

@Injectable({
  providedIn: 'root',
})
export class LegalService {
  private legalMentionsUrl = 'data/legal-mentions.json';
  private privacyPolicyUrl = 'data/privacy-policy.json';

  constructor(private http: HttpClient) {}

  getLegalMentions(): Observable<LegalMention[]> {
    return this.http.get<LegalMention[]>(this.legalMentionsUrl);
  }

  getPrivacyPolicy(): Observable<PrivacyPolicy[]> {
    return this.http.get<PrivacyPolicy[]>(this.privacyPolicyUrl);
  }

  isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  isObject(value: unknown): value is { [key: string]: string } {
    return value !== null && typeof value === 'object';
  }
}
