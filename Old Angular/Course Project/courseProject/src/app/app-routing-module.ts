import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipesDetail } from './recipes/recipes-detail/recipes-detail';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: Recipes, children: [
    { path: '', component: RecipeStart },
    { path: 'new', component: RecipeEdit },
    { path: ':id', component: RecipesDetail },
    { path: ':id/edit', component: RecipeEdit },
  ]},
  { path: 'shopping-list', component: ShoppingList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
