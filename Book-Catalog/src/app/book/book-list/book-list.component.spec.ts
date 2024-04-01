import { Book } from "src/app/types/book"
import { BookListComponent } from "./book-list.component";
import { of } from "rxjs";
import { BookService } from "../book-service/book-service.service";

describe('BookList component', () => {
    let books: Book[];
    let component: BookListComponent;
    let mockService: jasmine.SpyObj<BookService>;

    beforeEach(() => {
        books = [{
            _id: '1',
            title: 'Book1',
            author: 'Me',
            pages: 5,
            image: 'Image-link',
            description: 'description',
            owner: '123',
          },{
            _id: '2',
            title: 'Book2',
            author: 'Me',
            pages: 5,
            image: 'Image-link',
            description: 'description',
            owner: '123',
          }];
          mockService = jasmine.createSpyObj(['getBooks']);
          component = new BookListComponent(mockService)
    })
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('Fetch data', () => {
        beforeEach(() => {
            mockService.getBooks.and.returnValue(of(books))
            component.books = books;
          });
        it('Should render posts', () => {
            expect(component.books.length).toEqual(books.length)
        })
    })
})