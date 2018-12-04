import { NgModule } from "@angular/core";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RouterModule, Routes } from "@angular/router";
import { RecipeLandingComponent } from "./recipes/recipe-landing/recipe-landing.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const applicationRoute: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeLandingComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shoppinglist', component: ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(applicationRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
