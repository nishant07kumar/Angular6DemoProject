import { Component, OnInit } from '@angular/core';
import { HttpDataService } from 'src/app/shared/httpdata-service';

@Component({
  selector: 'app-recipe-landing',
  templateUrl: './recipe-landing.component.html',
  styleUrls: ['./recipe-landing.component.css']
})
export class RecipeLandingComponent implements OnInit {

  constructor(private dataRecipe: HttpDataService) { }

  ngOnInit() {
    this.dataRecipe.GetRecipeData();
  }

}
