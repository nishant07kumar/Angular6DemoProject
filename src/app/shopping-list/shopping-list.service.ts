import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged =new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 10),
    new Ingredient('Wine', 2)
  ];

  getIngredients() {
   return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredientsfromRecipe(ingredientS: Ingredient[]) {
    this.ingredients.push(...ingredientS);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
