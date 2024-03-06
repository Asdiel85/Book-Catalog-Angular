import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Book } from '../../types/book';
import { BASE_URL } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 
  }
  getBooks() {
    return this.http.get<Book[]>(BASE_URL)
  }
}
