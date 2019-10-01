import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoorButtonComponent } from './door-button/door-button.component';
import { DoorContainerComponent } from './door-container/door-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DoorButtonComponent,
    DoorContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
