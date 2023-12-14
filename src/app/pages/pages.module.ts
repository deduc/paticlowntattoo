import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mis componentes
import { BiografiaComponent } from './biografia/biografia.component';
import { HomeComponent } from './home/home.component';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';

// mis modulos
import { HeaderModule } from './header/header.module';
import { MisDiseniosModule } from './mis-disenios/mis-disenios.module';
import { MisTrabajosModule } from './mis-trabajos/mis-trabajos.module';
import { SharedModule } from '../shared/shared.module';
// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [
        BiografiaComponent,
        HomeComponent,
        TituloPaginaComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MisDiseniosModule,
        MisTrabajosModule,
        SharedModule,
        // modulos angular material
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports: [
    ]
})
export class PagesModule { }
