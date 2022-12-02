import { Component } from '@angular/core';
import { Car } from 'src/model/Car';
import CARS from '../data/db.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cars';

  chosenMark: string = '';
  isMarkChosen: boolean = false;

  cars: Car[] = CARS;
  marks: string[] = []

  markModels: Car[] = []
  chosenModel: Car;
  isModelChosen: boolean = false;

  chosenColor: string = '';
  isColorChosen: boolean = false;

  constructor() {
    this.marks = [...new Set(this.cars.map(car => car.mark))]
  }

  markChange() {
    if (this.chosenMark !== '') {
      this.isMarkChosen = true
      this.markModels = this.cars.filter(car => car.mark === this.chosenMark);
      this.isModelChosen = false;
      this.isColorChosen = false;
    }
    else this.isMarkChosen = false;
  }

  modelChange() {
    if (this.chosenModel !== null) {
      this.isModelChosen = true
      this.isColorChosen = false;
      this.chosenColor = '';
    }
    else this.isMarkChosen = false;
  }

  colorChange() {
    if (this.chosenColor !== '') {
      this.isColorChosen = true 
    }
    else this.isColorChosen = false;
  }
}
