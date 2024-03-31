import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH, BASE_URL, LOGIN, REGISTER, USER } from 'src/app/constants/constants';
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
  getToken(): string {
    return localStorage.getItem('auth')!
  }

  getloggedUserId(): Observable<string> {
    return this.http.get<string>(`${BASE_URL}${AUTH}${USER}`)
  }

  logout(): void {
    return localStorage.removeItem('auth')
  }

  checkForUser(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${BASE_URL}${AUTH}${USER}/email`, {email})
  }
}
