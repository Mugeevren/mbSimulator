import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-connect-modal',
  templateUrl: './connect-modal.component.html',
  styleUrls: ['./connect-modal.component.scss']
})
export class ConnectModalComponent implements OnInit {

  @Input() showModal: boolean = true;
  constructor() { 
  }

  ngOnInit() {
    
  }


}