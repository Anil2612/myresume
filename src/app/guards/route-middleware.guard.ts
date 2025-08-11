import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import posthog from 'posthog-js';

@Injectable({
  providedIn: 'root'
})
export class RouteMiddlewareGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    posthog.capture('page_navigation', {
      path: state.url,
      timestamp: new Date().toISOString()
    });
    return true;
  }

}
