import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription= this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredient) => {
        this.ingredients = ingredient;
      }
    );
  }
  onEditShoppingItem(index: number) {
    this.shoppinglistService.editShoppngItem.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
