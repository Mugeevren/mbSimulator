import { Component, OnInit } from '@angular/core';
import { VehicleDetail } from 'src/models/vehicle-detail';
import { ApiService } from 'src/services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Vehicle } from 'src/models/vehicle';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: VehicleDetail;
  vehicleId: string;
  
  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    this.apiService.getVehicleById(this.vehicleId).subscribe((data: VehicleDetail)=>{
      console.log(data);
      this.vehicle = data;
    }); 

    this.vehicle= <VehicleDetail>{
      id: this.vehicleId,
      licenseplate: "S-GG-116",
      salesdesignation: "Mercedes-AMG CLA 45 4MATIC Shooting Brake",
      finorvin: "WDD***********002",
      modelyear: "2017",
      colorname: "mountaingrau metallic",
      fueltype: "Benzin",
      powerhp: "381",
      powerkw: "280",
      numberofdoors: "3",
      numberofseats: "5"
    };
  }

}
