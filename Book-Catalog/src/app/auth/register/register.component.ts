import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/passwords-match';
import { AuthService } from '../authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  emailPattern: string | RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registrationForm = this.fb.group(
    {
      email: ['', [Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: passwordMatch,
    }
  );

  createUser(): void {
    const { email, password, repeatPassword } = this.registrationForm.value;
    this.authService
      .register(email!, password!, repeatPassword!)
      .subscribe((data) => {
        this.router.navigate(['/auth/login']);
      });
  }
}
