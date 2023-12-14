import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderLgComponent } from './components/header-lg/header-lg.component';
import { HeaderSmMdComponent } from './components/header-sm-md/header-sm-md.component';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';


@NgModule({
    imports: [],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent,
        HeaderLgComponent,
        HeaderSmMdComponent,
        DialogMapComponent
    ],
    providers: [],
})
export class HeaderModule { }
