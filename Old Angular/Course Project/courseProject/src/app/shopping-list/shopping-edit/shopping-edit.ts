import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
})
export class ShoppingEdit {
  @ViewChild('nameInput') nameInputItem!: ElementRef;
  @ViewChild('amountInput') amountInputItem!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputItem.nativeElement.value;
    const ingAmount = this.amountInputItem.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);

    this.ingredientAdded.emit(newIngredient);
    console.log('Testando add');
    
  }
}
