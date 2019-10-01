import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';

@Component({
  selector: 'mb-door-button',
  templateUrl: './door-button.component.html',
  styleUrls: ['./door-button.component.scss']
})
export class DoorButtonComponent implements OnInit {

  isLoading: boolean = false;

  @Input('mb-door') door: any; //TODO: door UI model
  constructor(public element: ElementRef) { }

  ngOnInit() {
    console.log(this.door);
  }

  onDoorClick() {
    this.isLoading = true;
    // make your ajax call here instead of the timeout
    setTimeout(() => {
      this.isLoading = false;
      this.door.isLocked = !this.door.isLocked;
    }, 2000)
  }
  

}
