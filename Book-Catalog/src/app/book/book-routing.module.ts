import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [{
    path: 'books',
    children: [
        {path: '', pathMatch: 'full', component: BookListComponent},
        {path: 'my-books', component: MyBooksComponent},
        {path: 'create-book', component: CreateBookComponent},
        {path: ':bookId', component: CurrentBookComponent},
        {path: 'edit/:bookId', component: CreateBookComponent}
      ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
