import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  title: string = 'Home'
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/home': this.title = 'Home'; break;
          case '/journeys': this.title = 'Journeys'; break;
          case '/add-journey': this.title = 'Add journey'; break;
          case '/shopping-basket': this.title = 'Shopping basket'; break;
          case '/history': this.title = 'History'; break;
          default: this.title = 'Details'; break;
        }
      }
    })
  }
}
