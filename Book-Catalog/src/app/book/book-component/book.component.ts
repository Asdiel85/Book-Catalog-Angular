import { Component, Input } from '@angular/core';
import { Book } from 'src/app/types/book';
import { BookService } from '../book-service/book-service.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input('book') book = {} as Book

  constructor() {

  }

}
