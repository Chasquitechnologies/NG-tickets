import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDataAjaxComponent } from './base-data-ajax/base-data-ajax.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../../layout/default/default.component';
import { LayoutModule } from '../../layout/layout.module';
import { AdminTicketsMainComponent } from './admin-tickets-main/admin-tickets-main.component';
import { AdminTicketsDetailsComponent } from './admin-tickets-details/admin-tickets-details.component';
import { throwIfAlreadyLoaded } from '../../../_services/module-import-guard';

import { FormsModule } from '@angular/forms';


import {CalendarModule} from 'primeng/primeng';

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
    CalendarModule,
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),   
    FormsModule
  ],
  declarations: [
    BaseDataAjaxComponent,
    AdminTicketsMainComponent,
    AdminTicketsDetailsComponent
  ]
})
export class AdminTicketsModule { 
  constructor( @Optional() @SkipSelf() parentModule: AdminTicketsModule) {
    throwIfAlreadyLoaded(parentModule, 'AdminTicketsModule');
  }
}
