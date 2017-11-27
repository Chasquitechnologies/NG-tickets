import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { FilterDropDownService } from './_services/filter-drop-down.service';
import { AdminTicketService } from './_services/admin-ticket-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DAOmockup } from './DAOLayer/DAOmockup';
import { IDAO } from './DAOLayer/IDAO';


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
    HttpClientModule,
    BrowserAnimationsModule,    
    FormsModule,
    OAuthModule.forRoot(),
    LayoutModule,
    AppRoutingModule,
    ThemeRoutingModule
  ],
  exports:[
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: IDAO, useClass: DAOmockup},
    AdminTicketService,
    FilterDropDownService,
    RedirectUrlService,
    ScriptLoaderService, 
    AuthGuardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
