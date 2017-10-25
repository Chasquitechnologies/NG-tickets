import { Component, OnInit, OnDestroy } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';



@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: './login-test.component.html',
})
export class LoginTestComponent implements OnInit, OnDestroy {
    
    ngOnDestroy(): void {
        var parent = document.getElementById('m_login');
        parent.parentNode.removeChild(parent);        
    }

    loggedIn : boolean = false;

    constructor(private oauthService: OAuthService, private _router: Router) {

    }

    public login() {
        this.oauthService.initImplicitFlow('some-state', { 'custom-param': 'test' });
    }

    public logoff() {
        this.oauthService.logOut();
    }

    public get name() {
        let claims = this.oauthService.getIdentityClaims();
        console.log(claims);
        if (!claims) return null;
        return claims['given_name'];
    }

    public get isLoggedIn(){
        var claims = this.oauthService.getIdentityClaims();        
        if (claims){
            this.loggedIn = true;
            this._router.navigate(['index']);
            return true            
        }else{
            this.loggedIn = false;            
            return false
        }
    }


    ngOnInit() {

    }


      ngAfterViewInit() {
        // if (this.checkLoggedIn()) {
        //     this._router.navigate(['/index']);
        // }
      }

}
