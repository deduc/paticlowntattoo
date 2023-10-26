import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mis componentes
import { TipoTrabajoComponent } from './tipo-trabajo/tipo-trabajo.component';
import { VisualizarDisenioComponent } from './visualizar-disenio/visualizar-disenio.component';



@NgModule({
    declarations: [
        TipoTrabajoComponent,
        VisualizarDisenioComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TipoTrabajoComponent
    ]
})
export class SharedModule { }
