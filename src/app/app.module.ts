import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AuthGuard} from "../services/auth.guard";

import { AppComponent } from './app.component';
import { DoorButtonComponent } from './door-button/door-button.component';
import { DoorContainerComponent } from './door-container/door-container.component';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path:'vehicles', component: VehiclesComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    DoorButtonComponent,
    DoorContainerComponent,
    ConnectModalComponent,
    VehiclesComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
