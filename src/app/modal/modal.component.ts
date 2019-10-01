import { Component, OnInit, EventEmitter, Injector, Output, Input } from '@angular/core';

@Component({
  selector: 'mb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle: string;
  @Input() cssClass = "";
  @Input() id: string;
  @Input() style: string;
  @Input() confirmButtonText: string = "Confirm";
  @Input() hasConfirmButton: boolean = false;
  @Input() cancelButtonText: string = "Cancel";
  @Input() hasCancelButton: boolean = false;
  @Input() closeButtonText: string = "Close";
  @Input() hasCloseButton: boolean = false;
  @Input() showPageContent: boolean = false;
  @Input() hideHeader: boolean = true;
  @Input() hideHeaderClose: boolean = true;
  @Input() width:number;
  @Input() set showModal(value: boolean) {
      this.displayCheck = value;
      this.getDisplay(this.displayCheck);
  }

  @Output("onConfirm") onConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() showModalChange: EventEmitter<boolean>;

  display: string = 'none';
  displayCheck: boolean = false;

  constructor(injector: Injector) {
      this.showModalChange = new EventEmitter();
  }
  ngOnInit() {
  }

  onButtonClick(event: Event) {
      this.onConfirm.emit();
  }

  onCloseHandled() {
      this.displayCheck = false;
      this.display = 'none';
      this.showModalChange.emit(this.displayCheck);
  }

  getDisplay(value: boolean) {
      if (value == true) {
          this.display = "block";
      }
      else {
          this.display = "none";
      }
  }

}
