import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/passwords-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group(
    {
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: passwordMatch,
    }
  );

  createUser(): void {
    console.log(this.registrationForm.value);
  }
}
