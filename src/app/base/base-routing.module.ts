import { Routes } from "@angular/router";
import { ModulesComponent } from "./modules";
import { ComponentsComponent } from "./components";
import { HomeComponent } from "./home";
import { ServicesComponent } from "./services";
import { RoutesComponent } from "./routes";
import { DataBindingComponent } from "./data-binding";
import { PipesComponent } from "./pipes";
import { DirectivesComponent } from "./directives";

export const BaseRoutes:Routes = [
    {
        path: 'base',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'components',
        component: ComponentsComponent
    },
    {
        path: 'modules',
        component: ModulesComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'routes',
        component: RoutesComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    }
];