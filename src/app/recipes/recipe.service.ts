import { Recipe } from "./recipe.model";
import { QUERY_READ_TEMPLATE_REF } from "@angular/core/src/render3";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe("Dokhla", "This is Gujrati Dish", "https://www.ruchiskitchen.com/wp-content/uploads/2015/01/dhokla-6.jpg", [new Ingredient('Floor', 4), new Ingredient('Green chilli', 10)]),
    new Recipe("Cake", "This is Sweet Dish", "https://d24pyncn3hxs0c.cloudfront.net/sites/default/files/styles/main_product_image/public/Truffle-Magic.jpg", [new Ingredient('chocolate', 250), new Ingredient('Bread', 2)])

  ];

  constructor(private shoppingListService: ShoppingListService) {

  }
  getRecipe() {
    return this.recipes.slice();

  }

  getRecipebyId(id: number) {
    return this.recipes[id];
  }

  addInredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredientsfromRecipe(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipeByIndex(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());

  }
}
