import { Pipe, PipeTransform } from '@angular/core';
import { Journey, JourneyFilter } from 'src/app/models/Journey';

@Pipe({
  name: 'journeyFilter',
})
export class JourneyFilterPipe implements PipeTransform {
  transform(journeys: Journey[], filter: JourneyFilter): Journey[] {
    return journeys.filter((item) => {
      let nameValid =
        filter.query !== ''
          ? item.name.toLowerCase().includes(filter.query.toLowerCase()) ||
            item.country.toLowerCase().includes(filter.query.toLowerCase()) ||
            item.description.toLowerCase().includes(filter.query.toLowerCase())
          : true;

      let countryValid =
        filter.countries.length !== 0
          ? filter.countries.includes(item.country.toLowerCase())
          : true;

      let costValid = true;

      if (filter.minCost !== undefined) {
        costValid = filter.minCost <= item.cost;
      }

      if (filter.maxCost !== undefined) {
        costValid = filter.maxCost >= item.cost;
      }

      let startDateValid = true;
      let endDateValid = true;

      if (filter.startDate !== undefined) {
        startDateValid = filter.startDate <= new Date(item.startDate);
      }
      if (filter.endDate !== undefined) {
        endDateValid = filter.endDate >= new Date(item.endDate);
      }

      return nameValid && countryValid && costValid && endDateValid;
    });
  }
}
