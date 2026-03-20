import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ShoppingList } from './shoppingList/shopping-list/shopping-list';
import { ShoppingListComponent } from './shoppingList/shopping-list.component/shopping-list.component';

@NgModule({
  declarations: [App, ShoppingList, ShoppingListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
