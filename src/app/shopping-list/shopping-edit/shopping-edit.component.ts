import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppinglistForm: NgForm;
  editMode = false;
  editedItemIndexValue: number;
  subscription: Subscription;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {    
    this.subscription = this.shoppingListService.editShoppngItem
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndexValue = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppinglistForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });
  }

  ngOnDestroy(): void {
    //this.shoppingListService.editShoppngItem.unsubscribe();
  }
  onItemAdded(form: NgForm) {
    const value = form.value;
    const ingredientData = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndexValue, ingredientData);
    } else {
      this.shoppingListService.addIngredients(ingredientData);
    }
    this.editMode = false;
    form.reset();
  }
  onClearData() {
    this.shoppinglistForm.reset();
    this.editMode = false;
  }
  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndexValue);
    this.onClearData();
  }
}
