import { Component, Input } from '@angular/core';
import { Topic } from 'src/app/models/Topic';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  @Input() topic: Topic;
  constructor(private sharedDataService: SharedDataService) {}

  selectTopic() {
    this.sharedDataService.selectTopic(this.topic);
  }
}
