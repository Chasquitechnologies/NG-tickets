import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs/Observable';
import { RedirectUrlService } from './redirect-url.service';

@Injectable()
export class AuthGuardServiceService implements CanActivate {
  
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error("Method not implemented.");
  }


  constructor(private _router: Router, private _oAuth: OAuthService, private _redirectUrl:RedirectUrlService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn(state.url);
        //return false
  }

  checkLoggedIn(url: string): boolean {
    let claims = this._oAuth.getIdentityClaims();  
    console.log(claims)
    if (claims) {
      return true      
    }

    //storing redirect uri in local storage
    try {
      localStorage.removeItem("returnUrl");
      localStorage.setItem("returnUrl", url);
    } catch (e) {

    }
    this._redirectUrl.redirectUrl = url;
    this._router.navigate(['login']);
    return false


  }


}
