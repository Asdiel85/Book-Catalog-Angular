// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { CreateBookComponent } from './create-book.component';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { BookService } from '../book-service/book-service.service';
// import { of } from 'rxjs';

// describe('CreateBookComponent', () => {
//   let component: CreateBookComponent;
//   let fixture: ComponentFixture<CreateBookComponent>;
//   let mockBookService: jasmine.SpyObj<BookService>;
//   beforeEach( async(() => {
//     mockBookService = jasmine.createSpyObj(['getSingleBook']);
//     let mockLocation = jasmine.createSpyObj(['back']);

//     TestBed.configureTestingModule({
//       declarations: [CreateBookComponent],
//       imports: [HttpClientTestingModule],
//       providers: [
//         { provide: Location, useValue: mockLocation },
//         { provide: BookService, useValue: mockBookService },
//         { provide: ActivatedRoute, useValue: {
//           params: of({id: undefined})
//         } },
        
//       ]
//     })
//     fixture = TestBed.createComponent(CreateBookComponent);
//   }));
//   beforeEach(() => {
//     fixture = TestBed.createComponent(CreateBookComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it('Should require all field', () => {
//     component.createMyBookForm.setValue({
//         title: '',
//           author: '',
//           pages: '',
//           image: '',
//           description: ''
//     })
//     expect(component.createMyBookForm.valid).toEqual(false)
//   })
// });
