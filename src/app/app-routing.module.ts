import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmphibiansComponent } from './amphibians/amphibians.component';
import { AvesComponent } from './aves/aves.component';
import { MamalsComponent } from './mamals/mamals.component';
import { PiscesComponent } from './pisces/pisces.component';
import { ReptilesComponent } from './reptiles/reptiles.component';

const routes: Routes = [{path:'mamals',component: MamalsComponent},{path:'aves',component:AvesComponent},{path:'reptiles',component:ReptilesComponent},
{path:'pisces',component:PiscesComponent},{path:'amphibians',component:AmphibiansComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
