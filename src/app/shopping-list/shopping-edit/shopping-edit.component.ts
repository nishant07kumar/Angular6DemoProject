import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onItemAdded() {

    const nameIngre = this.nameInputRef.nativeElement.value;
    const amountIngre = this.amountInputRef.nativeElement.value;
    const ingredientData = new Ingredient(nameIngre, amountIngre);
    this.shoppingListService.addIngredients(ingredientData);
  }
}
