import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailPattern: string | RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required]],
  });

  submitLoginForm(): void {
    if(this.loginForm.invalid) {
      return
    }
    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!).subscribe((user) => {
      localStorage.setItem('auth', JSON.stringify(user));
      this.router.navigate(['/books'])
    });
  }
}
