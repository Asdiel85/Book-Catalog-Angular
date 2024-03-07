import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-component/book.component';



@NgModule({
  declarations: [BookComponent,BookListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class BookModule { }
