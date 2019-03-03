import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from "../auth/authentiction.service";

@Injectable()
export class HttpDataService {

  constructor(private http: Http, private recipeService: RecipeService, private authenticationService: AuthenticationService) {

  }

  SaveRecipeData() {
    const authToekn = this.authenticationService.getAuthenticationToken();
    return this.http.put('https://angular6demonick.firebaseio.com/recipedata.json?auth=' + authToekn +  ' ' , this.recipeService.getRecipe())
  }

  GetRecipeData() {
    const authToekn = this.authenticationService.getAuthenticationToken();

    return this.http.get('https://angular6demonick.firebaseio.com/recipedata.json?auth=' + authToekn + ' ').pipe(
      map((response: Response) => {
        const dataRecipe: Recipe[] = response.json();
        for (let recipe of dataRecipe) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return dataRecipe;
      }
      )).subscribe(
        (recipe: Recipe[]) => {
          this.recipeService.setRecipe(recipe);
        }
      )
  }
}
