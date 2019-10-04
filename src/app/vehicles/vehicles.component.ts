import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';
import { ApiService } from 'src/services/api.service';
import { VehicleDetail } from 'src/models/vehicle-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  constructor(public apiService: ApiService,
    public router: Router) { }

  ngOnInit() {
    this.vehicles = [{
      id:"54F443D9684F3626D7",
      licenseplate: "S-GG-116",
      finorvin: "aaaa"
    },
    {
      id:"11F443D9684F3626D7",
      licenseplate: "35 AIN 280",
      finorvin: "bbbb"
    }];

    this.apiService.getVehicles().subscribe((data: Vehicle[])=>{
      console.log(data);
      this.vehicles = data;
    }) 

  }

  onVehicleSelect(vehicleId: string) {
    this.router.navigate(['/vehicles/'+vehicleId]);
  }

}
