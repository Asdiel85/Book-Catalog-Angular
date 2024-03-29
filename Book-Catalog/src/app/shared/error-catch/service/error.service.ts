import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../components/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private ngModal: NgbModal) { }

  displayError(error: string): void {
    const errorModal = this.ngModal.open(ErrorModalComponent);
    errorModal.componentInstance.message = error
    errorModal.componentInstance.confirm = false
  }
}
