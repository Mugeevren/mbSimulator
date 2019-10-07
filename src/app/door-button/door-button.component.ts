import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { DoorLockCommandEnum, CommandResultEnum } from 'src/models/door';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'mb-door-button',
  templateUrl: './door-button.component.html',
  styleUrls: ['./door-button.component.scss']
})
export class DoorButtonComponent implements OnInit {

  isLoading: boolean = false;

  @Input('mb-door') door: any;
  @Input() vehicleId: string;
  @Output() refreshDoors: EventEmitter<string>;
  constructor(public element: ElementRef,
    private apiService: ApiService) {
     this.refreshDoors = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  onDoorClick() {
    if(this.door.isMainLock){
      this.isLoading = true;
      
      this.apiService.lockVehicle(this.vehicleId, this.door.isLocked ? DoorLockCommandEnum.unlock : DoorLockCommandEnum.lock).subscribe((data: any)=>{
        this.isLoading = false;
        if(data && data.status == CommandResultEnum.initiated) {
          this.refreshDoors.emit();
          console.log("refresh door list");
        }
        else {
          alert('Unable to execute command: Please make sure all doors are closed.');
        }
      },
      (error) => {
        this.isLoading = false;
      }); 

    }
    
  }
  

}
