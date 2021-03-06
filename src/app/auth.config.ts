import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  //issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  issuer: 'https://sso.chasquitechnologies.com',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // URL of the SPA to redirect the user to after login
  postLogoutRedirectUri: window.location.origin + '/index.html',

    // URL of the SPA to redirect the user after silent refresh. This will be placed in an iframe!!!! 
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'spa-demo',
  clientId: 'client',
  
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  //scope: 'openid profile email voucher',
  scope: 'openid profile email app',
  
  showDebugInformation: true,
  sessionChecksEnabled: true

}