import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseRoutes } from "./base";

export const router:Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...BaseRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    
}