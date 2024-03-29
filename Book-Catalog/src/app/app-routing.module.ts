import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { NotFoundComponent } from './shared/not-found-page/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/books'},
  {path: 'books', component: BookListComponent},
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
