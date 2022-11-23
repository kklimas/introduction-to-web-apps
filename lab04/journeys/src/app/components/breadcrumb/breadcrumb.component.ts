import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Journey } from 'src/app/models/Journey';
import { AddJourneyModalComponent } from '../modals/add-journey-modal/add-journey-modal.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Output() journeyAdded: EventEmitter<any> = new EventEmitter<any>();
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddJourneyModalComponent)
      .afterClosed().subscribe(added  => {
        if (added) {
          this.journeyAdded.emit();
        }
      });
  }
}
