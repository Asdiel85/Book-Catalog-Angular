import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../authService/auth-service.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj(['register']);
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should be invalid if no data', () => {
    component.registrationForm.setValue({
      email: '',
      password: '',
      repeatPassword: '',
    });
    expect(component.registrationForm.valid).toEqual(false);
  });
  it('Should require valid email', () => {
    component.registrationForm.setValue({
      email: 'asd@abg.m',
      password: '11111',
      repeatPassword: '11111',
    });
    expect(component.registrationForm.valid).toEqual(false);
  });
});
