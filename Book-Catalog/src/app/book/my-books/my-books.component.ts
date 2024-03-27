import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { Book } from 'src/app/types/book';
import { AuthService } from 'src/app/auth/authService/auth-service.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private bookService: BookService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
   this.getMyBooks().subscribe(data => {
    this.books = data;
   })
  }

  getMyBooks(): Observable<Book[]> {
    return this.authService
      .getloggedUserId()
      .pipe(switchMap((id) => this.bookService.getUserBooks(id)))
  }
}
