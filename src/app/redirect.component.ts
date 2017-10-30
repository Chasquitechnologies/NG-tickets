import { Component, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { RedirectUrlService } from './_services/redirect-url.service';

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  encapsulation: ViewEncapsulation.None,  
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {
 
  //public loggedIn: boolean = false;
 public loggedIn: boolean;
 
  constructor(private oauthService: OAuthService, private _router: Router, private _redirectUrl: RedirectUrlService) { 
    this.loggedIn=false;
    this.isLoggedIn();    
    
  }

  ngOnDestroy(): void {
    // var parent = document.getElementById('Redirect');
    // parent.parentNode.removeChild(parent);
  }


  ngOnInit() {

  }

  ngOnViewAfterInit(){
    // this.isLoggedIn();    
}

//   ngOnChanges(changes: SimpleChanges) {
//     this.isLoggedIn();    
//     // this.isLoggedIn;    
//   }

  public isLoggedIn() {
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
            //return false
            this._router.navigate(['index']);                
        }            
        return true
    } else {
        this.loggedIn = false;
        return false
    }
}

}
