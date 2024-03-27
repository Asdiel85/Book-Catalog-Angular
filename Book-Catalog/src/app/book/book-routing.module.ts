import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { AuthActivate } from '../auth/guard/auth.guard';

const routes: Routes = [{
    path: 'books',
    children: [
        {path: '', pathMatch: 'full', component: BookListComponent},
        {path: 'my-books', component: MyBooksComponent , canActivate: [AuthActivate]},
        {path: 'create-book', component: CreateBookComponent,canActivate: [AuthActivate]},
        {path: ':bookId', component: CurrentBookComponent},
        {path: 'edit/:bookId', component: CreateBookComponent, canActivate: [AuthActivate]}
      ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
