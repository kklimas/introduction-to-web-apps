import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JourneyFilter } from 'src/app/models/Journey';

@Component({
  selector: 'app-journey-filter',
  templateUrl: './journey-filter.component.html',
  styleUrls: ['./journey-filter.component.css']
})
export class JourneyFilterComponent {
  @Output() filterEvent: EventEmitter<JourneyFilter> = new EventEmitter();
  @Input() countries: string[];
  @Input() maxCost: number;
  @Input() minCost: number; 

  maxCostPercentage: number;
  minCostPercentage: number;

  filter: JourneyFilter = new JourneyFilter();
  minStartDate: Date;
  minEndDate: Date;
  maxDate: Date;

  constructor() {
    this.minStartDate = new Date();
    this.minEndDate = new Date();
    this.maxDate = new Date('2122-12-12');
    
  }

  startDateChange() {
    this.minEndDate = this.filter.startDate;
    this.filterChanged();
  }
  endDateChange() {
    this.maxDate = this.filter.endDate;
    this.filterChanged();
  }
  clearFilters() {
    this.filter = new JourneyFilter();
    this.filterChanged();
  }
  filterChanged() {
    this.filterEvent.emit(this.filter);
  }
}
