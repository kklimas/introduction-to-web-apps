import { Component } from '@angular/core';
import { JourneyFilterPipe } from 'src/app/data/pipes/journey-filter.pipe';
import { Journey, JourneyFilter } from 'src/app/models/Journey';
import { JourneyDataService } from 'src/app/services/journey-data.service';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css'],
})
export class JourneyListComponent {
  journeys: Journey[] = [];
  countries: string[] = []
  filteredJourneys: Journey[] = [];
  filter: JourneyFilter = new JourneyFilter();
  pipe: JourneyFilterPipe = new JourneyFilterPipe();
  maxCost: number;
  minCost: number;

  constructor(
    private journeyService: JourneyDataService,
    private toastSercice: ToastService,
    private shoppingBasketService: ShoppingBasketService
  ) {
    this.getJourneys();
    journeyService.refresh.subscribe(() => {
      this.getJourneys();
    });
  }

  getJourneys() {
    this.journeyService.getJourneys().subscribe({
      next: (data) => {
        this.journeys = data;
        this.getTripCountries();
        this.removeTakenTickets();
        this.filterChange(this.filter);
      },
      error: () => {
        this.toastSercice.showError();
      },
    });
  }
  

  filterChange(filter: JourneyFilter) {
    this.filter = filter;
    this.filteredJourneys = this.pipe.transform(this.journeys, this.filter);
    this.markJourneys();
  }

  // remove tickets that were saved in localStorage
  private removeTakenTickets() {
    this.journeys.forEach(j => {
      j.ticketsLeft -= this.shoppingBasketService.itemsInBasket(j.id);
    })
  }

  private markJourneys() {
    let min = Infinity;
    let max = 0;
    this.filteredJourneys.forEach(j => {      
      if (j.cost > max) max = j.cost;
      if (j.cost < min) min = j.cost;
    });
    this.maxCost = max;
    this.minCost = min;
  }

  private getTripCountries() {
    let countriesData = new Set(this.journeys.map(j => j.country)) 
    this.countries = [...countriesData.keys()];
  }
}
