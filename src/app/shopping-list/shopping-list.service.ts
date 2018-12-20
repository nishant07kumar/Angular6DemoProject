import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 10),
    new Ingredient('Wine', 2)
  ];

  getIngredients() {
   return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredientsfromRecipe(ingredientS: Ingredient[]) {
    this.ingredients.push(...ingredientS);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
