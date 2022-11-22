import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Topic } from '../models/Topic';
import { TOPICS } from './data';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedTopic = new Subject<Topic>();
  private topics: Topic[] = TOPICS;

  selectedTopic$ = this.selectedTopic.asObservable();

  selectTopic(topic: Topic) {
    this.selectedTopic.next(topic);
  }

  getTopics(): Topic[] {
    return this.topics;
  }
}
