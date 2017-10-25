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
import { LoginTestComponent } from './login-test.component';
import { AuthGuardServiceService } from './_services/auth-guard-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    LoginTestComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    OAuthModule.forRoot(),
    LayoutModule,
    AppRoutingModule,
    ThemeRoutingModule
  ],
  providers: [ScriptLoaderService, AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
