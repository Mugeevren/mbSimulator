import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Vehicle } from 'src/models/vehicle';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { mercedesAuth } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getHeader() {
    return {'accept': 'application/json', 'authorization': 'Bearer '+localStorage.getItem('access_token')};
  }


  public getVehicles(){
    localStorage.setItem('isLoading', 'true');
    let header = this.getHeader();
    return this.httpClient.get<Vehicle[]>(`${mercedesAuth.corsProxyEndpoindURL}/${mercedesAuth.apiEndpointURL}/vehicles`, { headers: header })
    .pipe(
        catchError(this.handleError)
    );
  }

  public getVehicleById(id: string){
    localStorage.setItem('isLoading', 'true');
    return this.httpClient.get(`${mercedesAuth.corsProxyEndpoindURL}/${mercedesAuth.apiEndpointURL}/vehicles/${id}`, { headers: this.getHeader() })
    .pipe(
      catchError(this.handleError)
    );
  }

  public getVehicleDoorStatus(id: string){
    return this.httpClient.get(`${mercedesAuth.corsProxyEndpoindURL}/${mercedesAuth.apiEndpointURL}/vehicles/${id}/doors`, { headers: this.getHeader() })
    .pipe(
      catchError(this.handleError)
    );
  }
  
  public lockVehicle(vehicleId: string, command: string){
    const data = {
      "command": command
    };
    return this.httpClient.post(`${mercedesAuth.corsProxyEndpoindURL}/${mercedesAuth.apiEndpointURL}/vehicles/${vehicleId}/doors`, data, {headers: this.getHeader()})
     .pipe(
      catchError(this.handleError)
    ); 

  }

  // Implement a method to handle errors if any
   private handleError(err: HttpErrorResponse | any) {
      localStorage.setItem('isLoading', 'false');
     console.error('An error occurred', err);
     alert('An error occurred' + ' : ' +err.message);
     return throwError(err.message || err);
    }

    public isLoading(): boolean {
      return localStorage.getItem('isLoading') == "true";
    }

}
