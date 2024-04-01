import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CurrentBookComponent } from './current-book.component';
import { BookService } from '../book-service/book-service.service';
import {of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Book } from 'src/app/types/book';
import { By } from '@angular/platform-browser';

describe('CurrentBook component', () => {
  let component: CurrentBookComponent
  let fixture: ComponentFixture<CurrentBookComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  beforeEach(() => {

    mockBookService = jasmine.createSpyObj(['getSingleBook']);
    let mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [CurrentBookComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: BookService, useValue: mockBookService },
        { provide: ActivatedRoute, useValue: {
          params: of({id: 1})
        } },
        
      ],
    });

    fixture = TestBed.createComponent(CurrentBookComponent);
  });
  it('should render book title', () => {
    mockBookService.getSingleBook.and.returnValue(
      of({
        _id: '1',
        title: 'Book1',
        author: 'Me',
        pages: 5,
        image: 'Image-link',
        description: 'description',
        owner: '123',
      } as Book)
    );
    fixture.detectChanges();

    const h2Element = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement;
    expect(h2Element.textContent).toBe('Book1')
  });
});
