import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book-service/book-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookService: BookService
  ) {}

  createMyBookForm = this.fb.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    pageCount: ['', [Validators.required]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]]
  })
}
