import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mis componentes
import { HomeComponent } from './home/home.component';

// mis modulos
import { MisDiseniosModule } from './mis-disenios/mis-disenios.module';
import { MisTrabajosModule } from './mis-trabajos/mis-trabajos.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';
import { BiografiaComponent } from './biografia/biografia.component';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        TituloPaginaComponent,
        BiografiaComponent,
    ],
    imports: [
        CommonModule,
        MisDiseniosModule,
        MisTrabajosModule,
        SharedModule,
    ],
    exports: [
    ]
})
export class PagesModule { }
