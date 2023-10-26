import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// mis modulos
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// modulo enrutamiento
import { AppRoutingModule } from './app-routing.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        PagesModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
