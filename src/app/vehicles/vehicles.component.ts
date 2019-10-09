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

    this.apiService.getVehicles().subscribe((data: Vehicle[])=>{
      localStorage.setItem('isLoading', 'false');
      this.vehicles = data;
    }) 

  }

  onVehicleSelect(vehicleId: string) {
    this.router.navigate(['/vehicles/'+vehicleId]);
  }

}
