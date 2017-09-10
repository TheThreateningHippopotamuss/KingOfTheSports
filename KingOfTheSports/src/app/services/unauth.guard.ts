import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UnauthGuard implements CanActivate {

  constructor (private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.auth.authenticated) {
      return false;
    }
    alert('You are already logged in!');
    return true;
  }
}
