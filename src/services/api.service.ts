import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Vehicle } from 'src/models/vehicle';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  getHeader() {
    
  }


  public getVehicles(){
    return this.httpClient.get<Vehicle[]>(`${this.apiURL}/customers`)
    .pipe(
        catchError(this.handleError)
    );
  }

  public getVehicleById(id: number){
    return this.httpClient.get(`${this.apiURL}/customers/${id}`);
  }
  
  public lockVehicle(vehicleId: number, door: string){
    return this.httpClient.post(`${this.apiURL}/customers/`,vehicleId);
  }

  // Implement a method to handle errors if any
   private handleError(err: HttpErrorResponse | any) {
     console.error('An error occurred', err);
     return throwError(err.message || err);
    }

}



// // deal.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { throwError, Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Deal } from './deal';

// @Injectable()
// export class DealService {
//   // Define the routes we are going to interact with
//   private publicDealsUrl = 'http://localhost:3001/api/deals/public';

//   constructor(private http: HttpClient) { }

//   // Implement a method to get the public deals
//   getPublicDeals() {
//     return this.http
//       .get<Deal[]>(this.publicDealsUrl)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   // Implement a method to get the private deals
//   getPrivateDeals() {
//     return this.http
//       .get<Deal[]>(this.privateDealsUrl)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   // Implement a method to handle errors if any
//   private handleError(err: HttpErrorResponse | any) {
//     console.error('An error occurred', err);
//     return throwError(err.message || err);
//   }

//   purchase(item) {
//     alert(`You bought the: ${item.name}`);
//   }
// }
