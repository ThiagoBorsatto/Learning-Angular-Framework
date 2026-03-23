import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  standalone: false,
  templateUrl: './recipes-detail.html',
  styleUrl: './recipes-detail.css',
})
export class RecipesDetail {
  @Input() recipe!: Recipe;
}
