import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
/**
 * token present or not
 */
export class AnonymousGuard implements CanActivate {
  constructor() { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('sasasasa');
      return true;
  }
}

/**
 * token correct of user
 */
@Injectable()
export class AuthenticatedUser implements CanActivate {
  constructor() { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return true;
  }
}

/**
 * token correct of admin
 */
@Injectable()
export class AuthenticatedAdmin implements CanActivate {
  constructor() { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return true;
  }
}

