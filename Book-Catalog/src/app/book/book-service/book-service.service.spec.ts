import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookService } from './book-service.service';
import { TestBed } from '@angular/core/testing';

describe('BooksService', () => {
  const book = {
    _id: '1',
    title: 'Book1',
    author: 'Me',
    pages: 5,
    image: 'Image-link',
    description: 'description',
    owner: '123',
  };

  let mockBookArray = [
    {
      _id: '1',
      title: 'Book1',
      author: 'Me',
      pages: 5,
      image: 'Image-link',
      description: 'description',
      owner: '123',
    },
    {
      _id: '2',
      title: 'Book2',
      author: 'Me',
      pages: 5,
      image: 'Image-link',
      description: 'description',
      owner: '123',
    },
  ];

  let service: BookService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getAllBooks and return an array of Books', () => {
    service.getBooks().subscribe((res) => {
      expect(res).toEqual(mockBookArray);
    });
  });

  it('Should return book when requested with id', () => {
    service.getSingleBook(book._id).subscribe((res) => {
      expect(res).toEqual(book);
    });
  });
  it('Should return user books', () => {
    service.getUserBooks('123').subscribe((res) => {
      expect(res).toEqual(mockBookArray);
    });
  });
  it('Should create book properly', () => {
    service
      .createBook('Book2', 'Me', 5, 'Image-link', 'description')
      .subscribe((res) => {
        expect(res).toEqual(mockBookArray[0]);
      });
  });
  it('Should edit book properly', () => {
    service
      .editBook('1', 'Book2', 'Me', 5, 'Image-link', 'description')
      .subscribe((res) => {
        expect(res).toEqual(mockBookArray[0]);
      });
  });
  it('Should send request for deleting book properly', () => {
    service.deleteBook('1').subscribe((res) => {
      expect(res).toEqual(mockBookArray[0]);
    });
  });
});
