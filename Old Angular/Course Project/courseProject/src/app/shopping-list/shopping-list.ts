import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList {
  ingredients: Ingredient[] = [{
    name: 'Apples',
    amount: 5,
  },
  {
    name: 'Tomatoes',
    amount: 10,
  }];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
