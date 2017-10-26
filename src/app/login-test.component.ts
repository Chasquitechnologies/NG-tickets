import { Component, OnInit, OnDestroy } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { RedirectUrlService } from './_services/redirect-url.service';



@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: './login-test.component.html',
})
export class LoginTestComponent implements OnInit, OnDestroy {

    ngOnDestroy(): void {
        var parent = document.getElementById('m_login');
        parent.parentNode.removeChild(parent);
    }

    //public loggedIn: boolean = false;
    public loggedIn: boolean;
    
    constructor(private oauthService: OAuthService, private _router: Router, private _redirectUrl:RedirectUrlService) {
        this.loggedIn=true;
    }

    public login() {
        this.oauthService.initImplicitFlow('some-state', { 'custom-param': 'test' });
    }

    public logoff() {
        this.oauthService.logOut();
    }

    public get name() {
        let claims = this.oauthService.getIdentityClaims();
        // console.log(claims);
        if (!claims) return null;
        return claims['given_name'];
    }

    public get isLoggedIn() {
        let claims = this.oauthService.getIdentityClaims();
        if (claims) {
            this.loggedIn = true;
            
            if (this._redirectUrl.redirectUrl){
                this._router.navigateByUrl(this._redirectUrl.redirectUrl);
                
                //check if return url has been stored temporarily in the localstorage
                //this is not the best way to handle. It would probably be best if it was passed back on URL
            }else if (localStorage.getItem("returnUrl")){
                this._redirectUrl.redirectUrl = localStorage.getItem("returnUrl");
                localStorage.removeItem("returnUrl");
                this._router.navigateByUrl(this._redirectUrl.redirectUrl);                
            }else{
                this._router.navigate(['index']);                
            }            
            return true
        } else {
            this.loggedIn = false;
            return false
        }
    }


    ngOnInit() {
    }


    ngAfterViewInit() {
        
    }

}
