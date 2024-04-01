import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-component/book.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BookRoutingModule } from './book-routing.module';
import { CurrentBookComponent } from './current-book/current-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookComponent,BookListComponent, MyBooksComponent, CurrentBookComponent, CreateBookComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class BookModule { }
