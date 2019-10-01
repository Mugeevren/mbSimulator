import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  getHeader() {
    
  }


  public getVehicles(){
    return this.httpClient.get<Vehicle[]>(`${this.apiURL}/customers`);
  }

  public getVehicleById(id: number){
    return this.httpClient.get(`${this.apiURL}/customers/${id}`);
  }
  
  public lockVehicle(vehicleId: number, door: string){
    return this.httpClient.post(`${this.apiURL}/customers/`,vehicleId);
  }

}
