import { EventEmitter, Injectable } from '@angular/core';
import { Observable, map, zip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Journey } from '../models/Journey';
import { JourneyCommentService } from './journey-comment.service';

@Injectable({
  providedIn: 'root',
})
export class JourneyDataService {
  private BASE_URL = 'http://localhost:3000';
  private JOURNEYS = '/journeys';

  refresh: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private httpClient: HttpClient
  ) {}

  getJourneys(): Observable<Journey[]> {
    return this.httpClient.get<Journey[]>(`${this.BASE_URL}${this.JOURNEYS}`);
  }

  getJourney(id: number): Observable<Journey> {
    return this.httpClient.get<Journey>(
      `${this.BASE_URL}${this.JOURNEYS}/${id}`
    );
  }

  addJourney(journey: Journey): Observable<Journey> {
    this.getJourneys().subscribe((data) => {
      data = data.sort((a, b) => b.id - a.id);
      journey.id = data.length > 0 ? data[0].id + 1 : 0;
    });
    return this.httpClient.post<Journey>(
      `${this.BASE_URL}${this.JOURNEYS}`,
      journey
    );
  }

  deleteJourney(id: number): Observable<Journey> {
    return this.httpClient.delete<Journey>(`${this.BASE_URL}${this.JOURNEYS}/${id}`);
  }
}
