import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //we need to inject the AuthService into the guard so we have the capability of checking whether the user is logged in
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.auth.isLoggedIn()){
        return true; // if the auth guard returns true (because the user is logged in - we allow access to a route)
      } else {
        window.alert(`You don't have permission to viiew this page!`)
        return false; // if the guard returns fals, then the user can't access it
      }
  }

}
