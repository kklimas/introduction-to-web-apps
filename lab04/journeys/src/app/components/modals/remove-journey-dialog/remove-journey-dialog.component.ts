import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Journey } from 'src/app/models/Journey';
import { JourneyDataService } from 'src/app/services/journey-data.service';

@Component({
  selector: 'app-remove-journey-dialog',
  templateUrl: './remove-journey-dialog.component.html',
  styleUrls: ['./remove-journey-dialog.component.css']
})
export class RemoveJourneyDialogComponent {
  constructor(
    private journeyDataService: JourneyDataService,
    public dialogRef: MatDialogRef<RemoveJourneyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public journey: Journey  
  ){}
  onYesClick() {
    this.journeyDataService.deleteJourney(this.journey.id).subscribe({
      next: () => console.log('Journey deleted'),
      error: () => console.log('Cannot delete')
    })
  }
}
