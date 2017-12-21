import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { NewTicketMainComponent } from './new-ticket-main/new-ticket-main.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../../layout/default/default.component';
import { LayoutModule } from '../../layout/layout.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { newTicketDropdownValidator } from '../../../_validators/newTicketDropdownValidator';


// PrimeNG Modules
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

const routes: Routes = [
  {
    "path": "",
    "component": DefaultComponent,
    "children": [
      {
        "path": "",
        "component": NewTicketMainComponent,
        "children": [
          {
            "path": "",
            "component": NewTicketComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
  ],
  declarations: [
    NewTicketComponent,
    NewTicketMainComponent
  ]
})
export class NewTicketModule { }
