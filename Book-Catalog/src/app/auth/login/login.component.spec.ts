import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../authService/auth-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core'; 

describe('LoginFormComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj(['login'])
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be invalid if no data', () => {
    component.loginForm.setValue({
       email: '',
       password: '' 
    })
    expect(component.loginForm.valid).toEqual(false)
  });
  it('Should be valid if correct data is filled', () => {
    component.loginForm.setValue({
        email: 'myemail@abv.bg',
        password: '11111' 
     })
     expect(component.loginForm.valid).toEqual(true)
  })
});
