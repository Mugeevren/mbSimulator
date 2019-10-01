import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-door-container',
  templateUrl: './door-container.component.html',
  styleUrls: ['./door-container.component.scss']
})
export class DoorContainerComponent implements OnInit {

  public doorList: any[];
  constructor() { }

  ngOnInit() {
    this.doorList = [
      {
        title: "Front left",
        isLocked: false
      },
      {
        title: "Front right",
        isLocked: true
      },
      {
        title: "Rear left",
        isLocked: true
      },
      {
        title: "Rear right",
        isLocked: false
      },
    ];
  }

}
