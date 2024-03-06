import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class BookModule { }
