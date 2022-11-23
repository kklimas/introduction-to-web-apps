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

  addJourney(journey: Journey): Observable<Journey> {
    this.getJourneys().subscribe(data => {
      data = data.sort((a, b) => b.id - a.id)
      journey.id = data.length > 0 ? data[0].id + 1: 0;
    })
    return this.httpClient.post<Journey>(`${this.BASE_URL}${this.JOURNEYS}`, journey);  
  }

  deleteJourney(id: number): Observable<Journey> {
    return this.httpClient.delete<Journey>(`${this.BASE_URL}${this.JOURNEYS}/${id}`);
  }
}
