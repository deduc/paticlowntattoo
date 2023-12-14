import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// mis modulos
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
// modulo enrutamiento
import { AppRoutingModule } from './app-routing.module';
// modulo bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        PagesModule,
        SharedModule,
        NgbModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
