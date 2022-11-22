import { Component, Input } from '@angular/core';
import { Journey } from 'src/app/models/Journey';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.css']
})
export class JourneyCardComponent {
  @Input() journey: Journey;
  isSmallWidth: boolean = false;

  constructor(private responsive: BreakpointObserver) {
    this.responsive.observe(Breakpoints.XSmall)
      .subscribe(result => {
        if (result.matches) {
          this.isSmallWidth = true;
        } else {
          this.isSmallWidth = false;
        }
      })
  }
}
