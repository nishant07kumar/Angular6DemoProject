import { Recipe } from "./recipe.model";
import { QUERY_READ_TEMPLATE_REF } from "@angular/core/src/render3";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Dokhla", "This is Gujrati Recide", "https://www.ruchiskitchen.com/wp-content/uploads/2015/01/dhokla-6.jpg",[new Ingredient('Floor', 4),new Ingredient('green chilli', 10)]),
    new Recipe("Cake", "This is Sweet Dish", "https://d24pyncn3hxs0c.cloudfront.net/sites/default/files/styles/main_product_image/public/Truffle-Magic.jpg", [new Ingredient('Chochlate', 250), new Ingredient('Bread', 1)])

  ];

  constructor(private shoppingListService: ShoppingListService) {

  }
  getRecipe() {
    return this.recipes.slice();

  }

  
  addInredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredientsfromRecipe(ingredient); 
  }
}
