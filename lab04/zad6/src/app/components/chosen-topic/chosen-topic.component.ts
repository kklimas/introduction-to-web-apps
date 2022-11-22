import { Component } from '@angular/core';
import { Topic } from 'src/app/models/Topic';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-chosen-topic',
  templateUrl: './chosen-topic.component.html',
  styleUrls: ['./chosen-topic.component.css']
})
export class ChosenTopicComponent {
  selected: boolean = false;
  topic: Topic;

  constructor(private sharedDataService: SharedDataService) {
    sharedDataService.selectedTopic$.subscribe(topic => {
      this.selected = true;
      this.topic = topic;
    })
  }
}
