import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.vehicles = [];
    this.vehicles.push({
      id:"54F443D9684F3626D7",
      licenseplate: "aaaa",
      finorvin: "aaaa"
    });
    console.log(this.apiService.getVehicles());

    this.apiService.getVehicles().subscribe((data: Vehicle[])=>{
      console.log(data);
      this.vehicles = data;
    }) 

  }

}
