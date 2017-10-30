import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './modules/theme-routing/theme/theme.component';
import { LayoutModule } from './modules/layout/layout.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from './_services/script-loader.service';
import { ThemeRoutingModule } from './modules/theme-routing/theme-routing.module';
import { HttpModule} from '@angular/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './login.component';
import { AuthGuardServiceService } from './_services/auth-guard-service.service';
import { RedirectUrlService } from './_services/redirect-url.service';
import { RedirectComponent } from './redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    LoginComponent,
    RedirectComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    OAuthModule.forRoot(),
    LayoutModule,
    AppRoutingModule,
    ThemeRoutingModule
  ],
  providers: [
    RedirectUrlService,
    ScriptLoaderService, 
    AuthGuardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
