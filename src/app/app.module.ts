import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MamalsComponent } from './mamals/mamals.component';
import { AvesComponent } from './aves/aves.component';
import { ReptilesComponent } from './reptiles/reptiles.component';
import { PiscesComponent } from './pisces/pisces.component';
import { AmphibiansComponent } from './amphibians/amphibians.component';

@NgModule({
    declarations: [
        AppComponent ,
        MamalsComponent,
        AvesComponent,
        ReptilesComponent,
        PiscesComponent,
        AmphibiansComponent
    ],
    providers: [],
    bootstrap: [ AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
    ]
})
export class AppModule { }
