import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Doors, ValidValue, DoorLockStatusEnum, DoorStatusEnum } from 'src/models/door';
import { BaseValue } from 'src/models/base-value';
import { timer } from 'rxjs';

@Component({
  selector: 'mb-door-container',
  templateUrl: './door-container.component.html',
  styleUrls: ['./door-container.component.scss']
})
export class DoorContainerComponent implements OnInit {

  public doorList: any[];

  @Input() vehicleId: string;
  @Input() numberOfDoors: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    let counter = 0;
    this.getVehicleDoorStatus(true);

    timer(0, 4000)
      .subscribe(() => {
        
        console.log(++counter);
        this.getVehicleDoorStatus(false);
      })

  }

  getVehicleDoorStatus(hasPreloader: boolean) {
    if(hasPreloader) {
      localStorage.setItem('isLoading', 'true');
    }
    this.apiService.getVehicleDoorStatus(this.vehicleId).subscribe((data: Doors)=>{
      if(hasPreloader) {
        localStorage.setItem('isLoading', 'false');
      }
      this.convertToDoorList(data);
    }); 
  }

  checkIsValidDoor(doorBase: BaseValue) {
    if(doorBase) {
      return doorBase.retrievalstatus == ValidValue;
    }
    return false;
  }

  convertToDoorList(doorData: Doors) {
    this.doorList = [];
    if(this.checkIsValidDoor(doorData.doorlockstatusvehicle)){
      this.doorList.push({
        title: "Lock the car",
        isLocked: doorData.doorlockstatusvehicle.value == DoorLockStatusEnum.locked,
        isOpened: undefined,
        isMainLock: true
    });
    if(this.checkIsValidDoor(doorData.doorstatusfrontleft) && this.checkIsValidDoor(doorData.doorlockstatusfrontleft)){
      this.doorList.push({
        title: "Front Left",
        isLocked: doorData.doorlockstatusfrontleft.value == DoorLockStatusEnum.locked,
        isOpened: doorData.doorstatusfrontleft.value == DoorStatusEnum.open
      });
    }
    if(this.checkIsValidDoor(doorData.doorstatusfrontright) && this.checkIsValidDoor(doorData.doorlockstatusfrontright)){
      this.doorList.push({
        title: "Front Right",
        isLocked: doorData.doorlockstatusfrontright.value == DoorLockStatusEnum.locked,
        isOpened: doorData.doorlockstatusfrontright.value == DoorStatusEnum.open
      });
    }
    if(this.checkIsValidDoor(doorData.doorstatusrearleft) && this.checkIsValidDoor(doorData.doorlockstatusrearleft)){
      this.doorList.push({
        title: "Rear Left",
        isLocked: doorData.doorlockstatusrearleft.value == DoorLockStatusEnum.locked,
        isOpened: doorData.doorstatusrearleft.value == DoorStatusEnum.open
      });
    }
    if(this.checkIsValidDoor(doorData.doorstatusrearright) && this.checkIsValidDoor(doorData.doorlockstatusrearright)){
      this.doorList.push({
        title: "Rear Right",
        isLocked: doorData.doorlockstatusrearright.value == DoorLockStatusEnum.locked,
        isOpened: doorData.doorstatusrearright.value == DoorStatusEnum.open
      });
    }
    // if(this.checkIsValidDoor(doorData.doorlockstatusdecklid)){
    //   this.doorList.push({
    //     title: "Deck Lid",
    //     isLocked: doorData.doorlockstatusdecklid.value == DoorLockStatusEnum.locked,
    //     isOpened: undefined
    //   });
    // }
    // if(this.checkIsValidDoor(doorData.doorlockstatusgas)){
    //   this.doorList.push({
    //     title: "Gas",
    //     isLocked: doorData.doorlockstatusgas.value == DoorLockStatusEnum.locked,
    //     isOpened: undefined
    //   });
    // }
    
    }
  }

}
