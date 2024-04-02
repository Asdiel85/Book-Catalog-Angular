import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth-service.service';
import { UserLogin, UserRegister } from 'src/app/types/user';

describe('Auth service', () => {
  const user = {
    _id: '65d34fbec0338e4a312bab78',
    email: 'asdiel@abv.bg',
    password: '11111',
  };
  let regUser: UserRegister;
  let loginUser: UserLogin
  let service: AuthService;
  let httpController: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpClientTestingModule);
  });

  it('Should send login request correctly', () => {
    service.login(user.email, user.password).subscribe((res) => {
        expect(res).toEqual(loginUser)
    })
  })
  it('Should send register request correctly', () => {
    service.register('asdiel@abv.bg', '11111', '11111').subscribe((res) => {
        expect(res).toEqual(regUser)
    })
  })
});
