import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardServiceService implements CanActivate {
  
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error("Method not implemented.");
  }


  constructor(private _router: Router, private _oAuth: OAuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn();
        //return false
  }

  checkLoggedIn(): boolean {
    let claims = this._oAuth.getIdentityClaims();  
    console.log(claims)

    if (claims) {
      return true      
    }
    this._router.navigate(['login']);
    return false


  }


}
