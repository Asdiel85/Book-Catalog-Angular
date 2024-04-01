import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CurrentBookComponent } from './current-book.component';
import { BookService } from '../book-service/book-service.service';
import {of } from 'rxjs';
import { Book } from 'src/app/types/book';
import { By } from '@angular/platform-browser';

describe('CurrentBook component', () => {
  let fixture: ComponentFixture<CurrentBookComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '1';
          },
        },
      },
    };

    mockBookService = jasmine.createSpyObj(['getSingleBook']);
    let mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [CurrentBookComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: BookService, useValue: mockBookService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
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
