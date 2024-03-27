import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book-service/book-service.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  bookId: string | null = null;
  buttonValue: string = '';
  imageUrl: string | RegExp = /^(http|https):\/\//;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  createMyBookForm = this.fb.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    pages: ['', [Validators.required, Validators.min(1)]],
    image: ['', [Validators.required, Validators.pattern(this.imageUrl)]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000),
      ],
    ],
  });

  submitCreateBookForm(): void {
    const { title, author, pages, image, description } =
      this.createMyBookForm.value;
    if (!this.bookId) {
      this.bookService
        .createBook(title!, author!, Number(pages), image!, description!)
        .subscribe(() => {});
      this.router.navigate(['/books/my-books']);
    } else {
      this.bookService
        .editBook(
          this.bookId,
          title!,
          author!,
          Number(pages),
          image!,
          description!
        )
        .subscribe(() => {});
      this.router.navigate(['/books', this.bookId]);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('bookId');
      if (this.bookId) {
        this.buttonValue = 'Edit';
        this.getCurrentBookInfo(this.bookId);
      } else {
        this.buttonValue = 'Create';
      }
    });
  }

  private getCurrentBookInfo(id: string): void {
    this.bookService.getSingleBook(id).subscribe((book: Book) => {
      this.populateForm(book);
    });
  }

  private populateForm(book: Book): void {
    this.createMyBookForm.patchValue({
      title: book.title,
      author: book.author,
      pages: String(book.pages),
      image: book.image,
      description: book.description,
    });
  }
}
