import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Book } from '../../types/book';
import { BASE_URL, BOOKS, CREATE } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 
  }
  getBooks() {
    return this.http.get<Book[]>(BASE_URL)
  }

  getSingleBook(id: string) {
    return this.http.get<Book>(`${BASE_URL}/${BOOKS}/${id}`)
  }
  createBook(title: string, author: string, pages: number, image: string, description: string) {
    return this.http.post<Book>(`${BASE_URL}/${BOOKS}${CREATE}`, {title, author, pages, image, description})
  }
  getUserBooks(userId: string) {
    return this.http.get<Book[]>(`${BASE_URL}/${BOOKS}/${userId}/${BOOKS}`)
  }

  editBook(id: string, title: string, author: string, pages: number, image: string, description: string) {
    return this.http.put<Book>(`${BASE_URL}/${BOOKS}/${id}`, {title, author, pages, image, description})
  }
}
