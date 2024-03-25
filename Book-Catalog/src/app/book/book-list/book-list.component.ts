import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.fetchBooks()
  }
 
  fetchBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    })
  } 
}
