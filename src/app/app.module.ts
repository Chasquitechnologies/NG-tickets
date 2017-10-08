import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './modules/theme-routing/theme/theme.component';
import { LayoutModule } from './modules/layout/layout.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from './_services/script-loader.service';
import { ThemeRoutingModule } from './modules/theme-routing/theme-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    ThemeRoutingModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
