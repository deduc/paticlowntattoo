import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mis componentes
import { MisTrabajosComponent } from './mis-trabajos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        MisTrabajosComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        MisTrabajosComponent
    ]
})
export class MisTrabajosModule { }
