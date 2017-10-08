import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
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
              "component": IndexComponent
          }
      ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
