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
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  registrationForm = this.fb.group(
    {
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: passwordMatch,
    }
  );

  createUser(): void {
    const {email, password, repeatPassword} = this.registrationForm.value
    this.authService.register(email!, password!, repeatPassword!).subscribe(data => {
      this.router.navigate(['/auth/login'])
    })
  }
}
