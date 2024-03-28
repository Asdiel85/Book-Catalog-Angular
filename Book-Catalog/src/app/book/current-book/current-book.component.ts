import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/types/book';
import { AuthService } from 'src/app/auth/authService/auth-service.service';
import { switchMap } from 'rxjs';

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
    private router: Router
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
    this.bookService.deleteBook(this.book._id).subscribe(() => {
      this.router.navigate(['/books/my-books']);
    });
  }

  getCurrentBookDetails(): void {
    this.bookService
      .getSingleBook(this.id)
      .pipe(
        switchMap((book) => {
          this.book = book;
          return this.authService.getloggedUserId();
        })
      )
      .subscribe((userId) => (this.isOwner = this.book.owner === userId));
  }
}
