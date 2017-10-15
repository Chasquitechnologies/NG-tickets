import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDataAjaxComponent } from './base-data-ajax/base-data-ajax.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../../layout/default/default.component';
import { LayoutModule } from '../../layout/layout.module';
import { AdminTicketsMainComponent } from './admin-tickets-main/admin-tickets-main.component';
import { AdminTicketsDetailsComponent } from './admin-tickets-details/admin-tickets-details.component';


const routes: Routes = [
  {
      "path": "",
      "component": DefaultComponent,
      "children": [
          {
              "path": "",
              "component": AdminTicketsMainComponent,
              "children":[
                {
                  "path": "",
                  "component": BaseDataAjaxComponent,
                },
                {
                  "path": "detail",
                  "component": AdminTicketsDetailsComponent,
                }
              ]
          }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [BaseDataAjaxComponent, AdminTicketsMainComponent, AdminTicketsDetailsComponent]
})
export class AdminTicketsModule { }
