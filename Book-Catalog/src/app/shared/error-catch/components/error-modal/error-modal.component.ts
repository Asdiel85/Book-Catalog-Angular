import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/book/book-service/book-service.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {
  @Input('message') message = '' as string;
  @Input('confirm') confirm = false as boolean;
  @Input('id') id = '' as string;
  constructor(public activeModal: NgbActiveModal,
    private bookService: BookService,
    private router: Router){}

    confirmButtonClick(): void {
      this.bookService.deleteBook(this.id).subscribe(() => {
        this.router.navigate(['/books/my-books'])
      })
      this.activeModal.close()
    }
}
