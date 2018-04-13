import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

    /**
     * decides whether we can navigate to a route or not
     * @param {ActivatedRouteSnapshot} route Contains information about the associated route with the component loaded in outlet.
     * @param {RouterStateSnapshot} state It is a tree of activated route snapshots.
     * @returns {Observable<boolean> | Promise<boolean> | boolean}
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
              if (authenticated) {
                return true;
              } else {
                this.router.navigate(['/']);
              }
            }
        );
    }

    /**
     * decides whether we can navigate to child routes or not
     * @param {ActivatedRouteSnapshot} childRoute
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean> | Promise<boolean> | boolean}
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state);
    }
}
