import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-component/book.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BookRoutingModule } from './book-routing.module';
import { CurrentBookComponent } from './current-book/current-book.component';



@NgModule({
  declarations: [BookComponent,BookListComponent, MyBooksComponent, CurrentBookComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule
  ],
  exports: []
})
export class BookModule { }
