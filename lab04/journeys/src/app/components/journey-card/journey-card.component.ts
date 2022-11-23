import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Journey } from 'src/app/models/Journey';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { RemoveJourneyDialogComponent } from '../modals/remove-journey-dialog/remove-journey-dialog.component';



@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.css']
})
export class JourneyCardComponent {
  @Output() journeyDeleted: EventEmitter<Journey> = new EventEmitter<Journey>();
  @Input() journey: Journey;
  isSmallWidth: boolean = false;

  constructor(private responsive: BreakpointObserver, private dialog: MatDialog) {
    this.responsive.observe(Breakpoints.XSmall)
      .subscribe(result => {
        if (result.matches) {
          this.isSmallWidth = true;
        } else {
          this.isSmallWidth = false;
        }
      })
  }

  openDeleteDialog() {
    this.dialog.open(RemoveJourneyDialogComponent, {
      width: '250px',
      data: this.journey
    }).afterClosed().subscribe(deleted => {
      if (deleted) {
        this.journeyDeleted.emit(this.journey);
      }
    });
  }
}
