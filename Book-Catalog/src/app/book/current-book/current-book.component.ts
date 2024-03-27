import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/types/book';
import { AuthService } from 'src/app/auth/authService/auth-service.service';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css'],
})
export class CurrentBookComponent implements OnInit {
  book = {} as Book;
  userId: string | null = null;
  isOwner: boolean = false;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((book) => {
      const id = book['bookId'];

      this.bookService.getSingleBook(id).subscribe((book) => {
        this.book = book;

        this.authService.getloggedUserId().subscribe((id) => {
          this.userId = id;

          if (this.userId === this.book.owner) {
            this.isOwner = true;
          }
        });
      });
    });
  }
  editButtonClick(): void {
    this.router.navigate(['/books/edit', this.book._id]);
  }

  deleteButtonClick(): void {
    this.bookService.deleteBook(this.book._id).subscribe(() => {
      this.router.navigate(['/books/my-books']);
    });
  }
}
