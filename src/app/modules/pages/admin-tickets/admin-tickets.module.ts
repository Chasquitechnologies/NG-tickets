import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../../layout/default/default.component';
import { LayoutModule } from '../../layout/layout.module';
import { AdminTicketsMainComponent } from './admin-tickets-main/admin-tickets-main.component';
import { AdminTicketsDetailsComponent } from './admin-tickets-details/admin-tickets-details.component';
import { throwIfAlreadyLoaded } from '../../../_services/module-import-guard';

import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {SharedModule} from 'primeng/components/common/shared';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {PaginatorModule} from 'primeng/components/paginator/paginator';

import { AdminTicketsDatatableComponent } from './admin-tickets-datatable/admin-tickets-datatable.component';

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
                  "component": AdminTicketsDatatableComponent,
                },
                {
                  "path": "detail/:id",
                  "component": AdminTicketsDetailsComponent,
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
    DropdownModule,
    MultiSelectModule,
    DataTableModule,
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),   
    FormsModule
  ],
  declarations: [
    AdminTicketsDatatableComponent,
    AdminTicketsMainComponent,
    AdminTicketsDetailsComponent
  ]
})
export class AdminTicketsModule { 
  constructor( @Optional() @SkipSelf() parentModule: AdminTicketsModule) {
    throwIfAlreadyLoaded(parentModule, 'AdminTicketsModule');
  }
}
