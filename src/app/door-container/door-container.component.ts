import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Doors, ValidValue, DoorLockStatusEnum, DoorStatusEnum } from 'src/models/door';
import { BaseValue } from 'src/models/base-value';

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

    this.apiService.getVehicleDoorStatus(this.vehicleId).subscribe((data: Doors)=>{
      console.log(data);
      this.convertToDoorList(data);
    }); 

    var doorData: Doors = {
      doorstatusfrontleft: {
        value: "OPEN",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorstatusfrontright: {
        value: "OPEN",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorstatusrearleft: {
        value: "OPEN",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorstatusrearright: {
        value: "OPEN",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusfrontleft: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusfrontright: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusrearleft: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusrearright: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusdecklid: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusgas: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      },
      doorlockstatusvehicle: {
        value: "UNLOCKED",
        retrievalstatus: "VALID",
        timestamp: 123456789
      }
    };

    this.convertToDoorList(doorData);

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
        title: doorData.doorlockstatusvehicle.value == DoorLockStatusEnum.locked ? "Unlock the car" : "Lock the car",
        isLocked: doorData.doorlockstatusvehicle.value == DoorLockStatusEnum.locked,
        isOpened: undefined,
        class: "main-lock-button",
        isClickable: true
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
    if(this.checkIsValidDoor(doorData.doorlockstatusdecklid)){
      this.doorList.push({
        title: "Deck Lid",
        isLocked: doorData.doorlockstatusdecklid.value == DoorLockStatusEnum.locked,
        isOpened: undefined
      });
    }
    if(this.checkIsValidDoor(doorData.doorlockstatusgas)){
      this.doorList.push({
        title: "Gas",
        isLocked: doorData.doorlockstatusgas.value == DoorLockStatusEnum.locked,
        isOpened: undefined
      });
    }
    
    }
  }

}
