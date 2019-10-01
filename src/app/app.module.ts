import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DoorButtonComponent } from './door-button/door-button.component';
import { DoorContainerComponent } from './door-container/door-container.component';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DoorButtonComponent,
    DoorContainerComponent,
    ConnectModalComponent,
    ModalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path: '', component: HomeComponent, pathMatch: 'full' }], {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
