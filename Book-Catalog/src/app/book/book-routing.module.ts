import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { CurrentBookComponent } from './current-book/current-book.component';

const routes: Routes = [{
    path: 'books',
    children: [
        {path: '', pathMatch: 'full', component: BookListComponent},
        {path: 'my-books', component: MyBooksComponent},
        {path: ':bookId', component: CurrentBookComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
