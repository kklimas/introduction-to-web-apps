import { Component } from '@angular/core';
import { Topic } from 'src/app/models/Topic';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent {
  topics: Topic[];
  constructor (private sharedDataService: SharedDataService) {
    this.topics = sharedDataService.getTopics();
  }
}
