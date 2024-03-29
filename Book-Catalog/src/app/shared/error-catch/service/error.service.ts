import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private ngModal: NgbModal) { }

  displayError(error: string): void {
    const errorModal = this.ngModal.open(ModalComponent);
    errorModal.componentInstance.message = error
    errorModal.componentInstance.confirm = false
  }
}
