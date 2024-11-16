import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Healthcare } from '../models/healthcare.model';

@Injectable()
export class HealthcareService {
  private dataUrl = 'data/healthcare.json';

  constructor(private http: HttpClient) {}

  getHealthcareContent(): Observable<Healthcare[]> {
    return this.http.get<Healthcare[]>(this.dataUrl);
  }
}
