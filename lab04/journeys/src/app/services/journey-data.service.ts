import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Journey } from '../models/Journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyDataService {
  private BASE_URL = 'http://localhost:3000'
  private JOURNEYS = '/journeys'

  constructor(private httpClient: HttpClient) {}

  getJourneys(): Observable<Journey[]> {
    return this.httpClient.get<Journey[]>(`${this.BASE_URL}${this.JOURNEYS}`);
  }
}
