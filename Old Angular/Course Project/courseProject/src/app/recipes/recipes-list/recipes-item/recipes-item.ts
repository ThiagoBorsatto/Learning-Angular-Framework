import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  standalone: false,
  templateUrl: './recipes-item.html',
  styleUrl: './recipes-item.css',
})
export class RecipesItem {
  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
