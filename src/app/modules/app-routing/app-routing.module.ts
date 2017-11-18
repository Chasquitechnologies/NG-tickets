import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../../login.component';
import { AuthGuardServiceService } from '../../_services/auth-guard-service.service';

const routes = [
  { 
    path: 'lala', 
    component: LoginComponent 
   }];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  //imports: [CommonModule, RouterModule.forRoot(routes,{ enableTracing: true })],  
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
