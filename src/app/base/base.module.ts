import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ModulesComponent } from './modules/modules.component';
import { ServicesComponent } from './services/services.component';
import { RoutesComponent } from './routes/routes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';



@NgModule({
  declarations: [
    HomeComponent,
    ComponentsComponent,
    ModulesComponent,
    ServicesComponent,
    RoutesComponent,
    DataBindingComponent,
    PipesComponent,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BaseModule { }
