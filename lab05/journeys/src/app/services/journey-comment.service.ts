import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JourneyComment } from '../models/Journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyCommentService {
  
  commentEvent: EventEmitter<any> = new EventEmitter();

  private BASE_URL = 'http://localhost:3000'
  private COMMENTS = '/journey-comments'
  
  constructor(
    private httpClient: HttpClient,
    ) {}

  getAllComments(): Observable<JourneyComment[]> {
    return this.httpClient.get<JourneyComment[]>(`${this.BASE_URL}${this.COMMENTS}`)
  }

  addComment(comment: JourneyComment): Observable<JourneyComment> {
    this.getAllComments().subscribe(data => {
      data = data.sort((a, b) => b.id - a.id)
      comment.id = data.length > 0 ? data[0].id + 1: 0;
    })
    return this.httpClient.post<JourneyComment>(`${this.BASE_URL}${this.COMMENTS}`, comment);  
  }

  removeComment(id: number): Observable<JourneyComment> {
    return this.httpClient.delete<JourneyComment>(`${this.BASE_URL}${this.COMMENTS}/${id}`);  
  }
  
}
