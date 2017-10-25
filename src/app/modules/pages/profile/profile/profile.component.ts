import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.animationtest",
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    this.oauthService.silentRefresh()
    .then(info => console.debug('refresh ok', info))
    .catch(err => console.error('refresh error', err));
  }


  testSilentRefresh() {
    /*
     * Tweak config for implicit flow.
     * This is needed b/c this sample uses both flows
    */
    //this.oauthService.clientId = "spa-demo";
    this.oauthService.oidc = true;

    this
        .oauthService
        .silentRefresh()
        .then(info => console.debug('refresh ok', info))
        .catch(err => console.error('refresh error', err));
}

}
