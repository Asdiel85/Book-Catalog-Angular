import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/types/book';
import { AuthService } from 'src/app/auth/authService/auth-service.service';
import { concatMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/error-catch/components/modal/modal.component';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css'],
})
export class CurrentBookComponent implements OnInit {
  book = {} as Book;
  id: string | '' = '';
  isOwner: boolean = false;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private ngModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((book) => {
      this.id = book['bookId'];
    });
   
    this.getCurrentBookDetails();
  }

  editButtonClick(): void {
    this.router.navigate(['/books/edit', this.book._id]);
  }

  deleteButtonClick(): void {
  const modal = this.ngModal.open(ModalComponent);
    modal.componentInstance.message = `Do you want to delete ${this.book.title}`;
    modal.componentInstance.confirm = true;
    modal.componentInstance.id = this.book._id;
  }

  getCurrentBookDetails(): void {
    this.bookService
      .getSingleBook(this.id)
      .pipe(
        concatMap((book) => {
          this.book = book;
          if(!this.book) {
            this.router.navigate(['/404'])
          }
          return this.authService.getloggedUserId();
        })
      )
      .subscribe((userId) => (this.isOwner = this.book.owner === userId));
  }
}
