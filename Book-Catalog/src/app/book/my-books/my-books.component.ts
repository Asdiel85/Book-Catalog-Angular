import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service/book-service.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  books:Book[] = []
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.getMyBooks()
  }

  getMyBooks() : void {
    this.bookService.getUserBooks('65d34fbec0338e4a312bab78').subscribe((data) => {
      this.books = data
     })
  }
}
