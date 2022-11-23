import { Component, EventEmitter, Output } from '@angular/core';
import { Journey } from 'src/app/models/Journey';
import { JourneyDataService } from 'src/app/services/journey-data.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent {
  displayedColumns: string[] = ['name', 'country', 'cost', 'startDate', 'endDate']
  journeys: Journey[];
  
  
  constructor(private journeyService: JourneyDataService) {
    this.getJourneys();
  }

  getJourneys() {
    this.journeyService.getJourneys().subscribe({
      next: data => {
        this.journeys = data;
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
