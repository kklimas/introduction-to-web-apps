import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Journey } from 'src/app/models/Journey';
import { JourneyDataService } from 'src/app/services/journey-data.service';
import { AddJourneyModalComponent } from '../modals/add-journey-modal/add-journey-modal.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  constructor(
    public dialog: MatDialog,
    private journeyDataService: JourneyDataService) {}

  openDialog() {
    this.dialog.open(AddJourneyModalComponent)
      .afterClosed().subscribe(added  => {
        if (added) {
          this.journeyDataService.refresh.emit();
        }
      });
  }
}
