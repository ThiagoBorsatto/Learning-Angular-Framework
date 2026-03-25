import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [{
      name: 'Apples',
      amount: 5,
    },
    {
      name: 'Tomatoes',
      amount: 10,
    }];

    getIngredients() {
        return this.ingredients.slice();
    }
    
    getIngredientsFromId(index: number) {
        return this.ingredients[index];
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.slice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}