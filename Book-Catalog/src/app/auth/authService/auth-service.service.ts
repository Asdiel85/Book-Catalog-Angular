import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH, BASE_URL, LOGIN } from 'src/app/constants/constants';
import { UserLogin } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<UserLogin>(`${BASE_URL}${AUTH}${LOGIN}`, { email, password })
  }

  getUser(): boolean {
   return !!localStorage.getItem('auth')
  }

  logout(): void {
    return localStorage.removeItem('auth')
  }
}
