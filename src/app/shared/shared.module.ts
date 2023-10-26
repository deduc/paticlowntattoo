import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mis componentes
import { TipoTrabajoComponent } from './tipo-trabajo/tipo-trabajo.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [
        TipoTrabajoComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        TipoTrabajoComponent
    ]
})
export class SharedModule { }
