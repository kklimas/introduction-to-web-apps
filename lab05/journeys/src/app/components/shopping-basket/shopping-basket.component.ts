import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { BasketItem } from 'src/app/models/BasketItem';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent {
  basket: BasketItem[] = [];
  isSmallWidth: boolean = false;
  totalValue: number = 0;
  displayedColumns = ['name', 'startDate', 'endDate', 'count', 'cost']
  itemsCount: number = 0;

  constructor(private shoppingBasketService: ShoppingBasketService, private responsive: BreakpointObserver) {
    this.setBasket();
    this.shoppingBasketService.change.subscribe(() => {
      this.setBasket();
    });
    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.isSmallWidth = true;
        this.displayedColumns = ['name', 'count', 'cost']
      } else {
        this.isSmallWidth = false;
        this.displayedColumns = ['name', 'startDate', 'endDate', 'count', 'cost']
      }
    });
  }
  private setBasket() {
      this.getBasketItemsCount();
      this.getBasketItems();
  }

  private getBasketItems() {
    let initialValue = 0;
    this.basket = this.shoppingBasketService.getItems();
    this.totalValue = this.basket.map(item => item.costPerUnit * item.count)
      .reduce((acc, curr) => acc + curr, initialValue);
  }

  private getBasketItemsCount() {
    this.itemsCount = this.shoppingBasketService.getItemsCount();
  }
}
