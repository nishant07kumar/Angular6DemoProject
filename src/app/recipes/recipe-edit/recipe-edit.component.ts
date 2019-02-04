import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEdit = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.isEdit = param['id'] != null;
        this.initRecipeForm();
      }
    );
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initRecipeForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if (this.isEdit) {
      const recipe = this.recipeService.getRecipebyId(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ing of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ing.name),
            'amount': new FormControl(ing.amount)
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }
}
