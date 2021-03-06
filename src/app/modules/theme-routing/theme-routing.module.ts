import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { DefaultComponent } from '../layout/default/default.component'
import { AuthGuardServiceService } from '../../_services/auth-guard-service.service';
import { LoginComponent } from '../../login.component';
import { RedirectComponent } from '../../redirect.component';

const routes: Routes = [ 
    // {
    //     path: "index.html",
    //     redirectTo: "login",
    //     pathMatch: "full"        
    // },
    {
        path: "index.html",
        redirectTo: "redirect",
        pathMatch: "full"        
    },
    {
        path: "redirect",
        component: RedirectComponent,
        pathMatch: "full"        
    },
    {
        path: "login",
        component: LoginComponent,
        pathMatch: "full"
    },
    {
        path: "",
        component: ThemeComponent,
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuardServiceService],
        children: [
            {
                path: "index",
                loadChildren: "../pages/index/index.module#IndexModule",
            },
            {
                path: "profile",
                loadChildren: "../pages/profile/profile.module#ProfileModule",
            },
            {
                path: "tickets",
                loadChildren: "../pages/admin-tickets/admin-tickets.module#AdminTicketsModule",
            },
            {
                path: "newTicket",
                loadChildren: "../pages/new-ticket/new-ticket.module#NewTicketModule",
            },
            {
                path: "",
                redirectTo: "index",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
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
