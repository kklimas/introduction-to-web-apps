import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Journey } from 'src/app/models/Journey';
import { JourneyDataService } from 'src/app/services/journey-data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-journey-modal',
  templateUrl: './add-journey-modal.component.html',
  styleUrls: ['./add-journey-modal.component.css']
})
export class AddJourneyModalComponent {

  INVALID_LENGTH = "Length should be greater."
  
  minStartDate: Date;
  minEndDate: Date;
  maxDate: Date;
  journeyForm: FormGroup;

  constructor(private journeyDataService: JourneyDataService, private toastSevice: ToastService) {
    this.setForm();
    this.minStartDate = new Date();
    this.minEndDate = new Date();
    this.maxDate = new Date('2122-12-12');
  }

  private setForm() {
    this.journeyForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      country: new FormControl('', [Validators.minLength(2), Validators.required]),
      cost: new FormControl(1, [Validators.required]),
      img: new FormControl('', [Validators.minLength(2), Validators.required]),
      tickets: new FormControl(1, [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.journeyForm.get('name')?.value;
  }

  get country() {
    return this.journeyForm.get('country')?.value;
  }

  get cost() {
    return this.journeyForm.get('cost')?.value;
  }

  get img() {
    return this.journeyForm.get('img')?.value;
  }

  get tickets() {
    return this.journeyForm.get('tickets')?.value;
  }

  get description() {
    return this.journeyForm.get('description')?.value;
  }

  get startDate() {
    return this.journeyForm.get('startDate')?.value;
  }

  get endDate() {
    return this.journeyForm.get('endDate')?.value;
  }

  get journey() {
    let j = new Journey();
    j.name = this.name;
    j.country = this.country;
    j.cost = this.cost;
    j.img = this.img;
    j.ticketsLeft = this.tickets;
    j.description = this.description;
    j.startDate = this.startDate;
    j.endDate = this.endDate;
    return j;
  }

  startDateChange() {
    this.minEndDate = this.startDate;
  }
  endDateChange() {
    this.maxDate = this.endDate;
  }

  onFormSubmit() {
    this.journeyDataService.addJourney(this.journey).subscribe({
      next: () => this.toastSevice.showSuccess(),
      error: () => this.toastSevice.showError()
    })
    
  }
}
