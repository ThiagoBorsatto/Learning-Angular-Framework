import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { Recipes } from './recipes/recipes';
import { RecipesList } from './recipes/recipes-list/recipes-list';
import { RecipesDetail } from './recipes/recipes-detail/recipes-detail';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit';
import { RecipesItem } from './recipes/recipes-list/recipes-item/recipes-item';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    Recipes,
    RecipesList,
    RecipesItem,
    RecipesDetail,
    ShoppingList,
    ShoppingEdit,
    DropdownDirective,
    RecipeStart,
    RecipeEdit,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), 
    ShoppingListService, 
    FormsModule,
    NgForm,
  ],
  bootstrap: [App],
})
export class AppModule {}
