import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH, BASE_URL, LOGIN, REGISTER } from 'src/app/constants/constants';
import { UserLogin, UserRegister } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<UserLogin>(`${BASE_URL}${AUTH}${LOGIN}`, { email, password })
  }

  register(email: string, password: string, repeatPassword: string) {
    return this.http.post<UserRegister>(`${BASE_URL}${AUTH}${REGISTER}`, { email, password, repeatPassword })
  }

  getUser(): boolean {
   return !!localStorage.getItem('auth')
  }

  logout(): void {
    return localStorage.removeItem('auth')
  }
}
