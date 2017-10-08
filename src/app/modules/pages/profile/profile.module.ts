import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';
import { DefaultComponent } from '../../layout/default/default.component';



const routes: Routes = [
  {
      "path": "",
      "component": DefaultComponent,
      "children": [
          {
              "path": "",
              "component": ProfileComponent
          }
      ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
