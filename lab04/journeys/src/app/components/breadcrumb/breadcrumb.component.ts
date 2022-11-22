import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJourneyModalComponent } from '../modals/add-journey-modal/add-journey-modal.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(AddJourneyModalComponent)
  }
}
