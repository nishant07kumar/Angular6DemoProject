import { Component, OnInit, ViewChild, ElementRef, EventEmitter,  Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  @Output() IngredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onItemAdded(){

   const nameIngre= this.nameInputRef.nativeElement.value;
   const amountIngre= this.amountInputRef.nativeElement.value;
   const ingredientData=new Ingredient(nameIngre,amountIngre);
   this.IngredientAdded.emit(ingredientData);
  }
}
