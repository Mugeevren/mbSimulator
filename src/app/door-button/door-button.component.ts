import { Component, OnInit, ElementRef, ViewChild, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { element, EventEmitter } from 'protractor';

@Component({
  selector: 'mb-door-button',
  templateUrl: './door-button.component.html',
  styleUrls: ['./door-button.component.scss']
})
export class DoorButtonComponent implements OnInit {

  isLoading: boolean = false;

  @Input('mb-door') door: any;
  @Output() refreshCarList: EventEmitter; //TODO: implement get door status on door-container component
  constructor(public element: ElementRef) {
     //this.refreshCarList = new EventEmitter();
   }

  ngOnInit() {
    console.log(this.door);
  }

  onDoorClick() {
    if(this.door.isClickable){
      this.isLoading = true;
      // TODO: remove settimeout, do lock post call
      setTimeout(() => {
        this.isLoading = false;
        this.door.isLocked = !this.door.isLocked;
        //this.refreshCarList.emit();
      }, 2000);
    }
    
  }
  

}
