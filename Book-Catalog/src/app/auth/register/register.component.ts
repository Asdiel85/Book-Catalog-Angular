import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/passwords-match';
import { AuthService } from '../authService/auth-service.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

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
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)], [this.asyncIdValidator()]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: passwordMatch
    }
  );

  createUser(): void {
    if (this.registrationForm.invalid) {
      return
    }
    const { email, password, repeatPassword } = this.registrationForm.value;
    this.authService
      .register(email!, password!, repeatPassword!)
      .subscribe(() => {
        this.router.navigate(['/auth/login']);
      });
  }

 private asyncIdValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.authService.checkForUser(control.value).pipe(
          map(res => {
            if(res === true) {
              return {asyncValidation: 'failed'};
            }
            return null
          })
          ); 
    };
  }
}
