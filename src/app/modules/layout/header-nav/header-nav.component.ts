import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

declare let mLayout: any;

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    mLayout.initHeader();

  }

  public logoff() {
    this.oauthService.logOut();
  }
}
