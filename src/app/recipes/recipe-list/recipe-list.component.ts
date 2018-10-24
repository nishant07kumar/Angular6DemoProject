import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSeleced=new EventEmitter<Recipe>();

 recipes:Recipe[]=[
   new Recipe("Dokhla","This is Gujrati Recide","https://www.ruchiskitchen.com/wp-content/uploads/2015/01/dhokla-6.jpg"),
   new Recipe("Cake","This is Sweet Dish","https://d24pyncn3hxs0c.cloudfront.net/sites/default/files/styles/main_product_image/public/Truffle-Magic.jpg")
   )
 ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSeleced.emit(recipe);
  }
}
