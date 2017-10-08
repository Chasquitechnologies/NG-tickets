import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { DefaultComponent } from '../layout/default/default.component'


const routes: Routes = [
    {
        path: "",
        component: ThemeComponent,
        // "canActivate": [AuthGuard],
        children: [
            {
                path: "index",
                loadChildren: "../pages/index/index.module#IndexModule"
            },
            {
                path: "profile",
                loadChildren: "../pages/profile/profile.module#ProfileModule"
            },
            {
                path: "",
                redirectTo: "index",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "**",
        redirectTo: "404",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        LayoutModule
    ],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
