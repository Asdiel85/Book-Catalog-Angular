import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../authService/auth-service.service';

@Injectable({ providedIn: 'root' })
export class UserActivate implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUser()) {
        this.router.navigate(['/books']);
      return false;
    } else {
      return true;
    }
  }
}
