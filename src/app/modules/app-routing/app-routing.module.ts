import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes = [
  { path: 'welcome111', redirectTo: 'lalala111', pathMatch: 'full' }
              ];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
