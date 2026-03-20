import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessAlert } from './success-alert/success-alert';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessAlert,
    WarningAlertComponent,
    SuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
