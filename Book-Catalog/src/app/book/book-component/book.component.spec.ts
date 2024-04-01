import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from 'src/app/types/book';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  const book: Book = {
    _id: '1',
    title: 'Book1',
    author: 'Me',
    pages: 5,
    image: 'Image-link',
    description: 'description',
    owner: '123',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render book title', () => {
    component.book = book;
    fixture.detectChanges();
    const bookElement: HTMLElement = fixture.nativeElement;
    const paragraph = bookElement.querySelector('p');
    expect(paragraph?.textContent).toContain(book.title);
  });
  it('Should render image link', () => {
    component.book = book;
    fixture.detectChanges();
    const bookElement : HTMLElement = fixture.nativeElement;
    const imgElements = bookElement.querySelector('img');
    expect(imgElements?.src).toContain(book.image)
  })
});
