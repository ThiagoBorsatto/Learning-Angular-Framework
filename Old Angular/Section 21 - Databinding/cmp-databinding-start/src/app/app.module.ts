import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Cockpit } from './cockpit/cockpit';
import { ServerElement } from './server-element/server-element';

@NgModule({
  declarations: [
    AppComponent,
    Cockpit,
    ServerElement
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
