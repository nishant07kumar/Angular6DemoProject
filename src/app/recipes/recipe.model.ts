import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  constructor(name: string, descrpt: string, imagePathT: string, IngredientsT: Ingredient[]) {
    this.name = name;
    this.description = descrpt;
    this.imagePath = imagePathT;
    this.ingredients = IngredientsT;
  }
}
