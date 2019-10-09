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
    localStorage.setItem('isLoading', 'true');
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    this.apiService.getVehicleById(this.vehicleId).subscribe((data: VehicleDetail)=>{
      localStorage.setItem('isLoading', 'false');
      this.vehicle = data;
    }); 
  }

}
