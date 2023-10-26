import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollageDiseniosComponent } from './collage-disenios/collage-disenios.component';
import { MisDiseniosComponent } from './mis-disenios.component';


@NgModule({
    declarations: [
        CollageDiseniosComponent,
        MisDiseniosComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MisDiseniosComponent
    ]
})
export class MisDiseniosModule { }
