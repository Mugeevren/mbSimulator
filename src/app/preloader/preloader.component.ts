import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  @Input() message: string = "Please wait...";

  constructor() { }

  ngOnInit() {
  }

}
