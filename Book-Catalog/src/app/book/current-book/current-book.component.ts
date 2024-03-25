import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css'],
})
export class CurrentBookComponent implements OnInit {
  book = {} as Book;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((book) => {
      const id = book['bookId'];

      this.bookService.getSingleBook(id).subscribe((book) => {
        this.book = book;
      });
    });
  }
  editButtonClick(): void {
    this.router.navigate(['/books/edit', this.book._id])
  }
}
