import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderLgComponent } from './components/header-lg/header-lg.component';
import { HeaderSmMdComponent } from './components/header-sm-md/header-sm-md.component';


@NgModule({
    imports: [],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent,
        HeaderLgComponent,
        HeaderSmMdComponent
    ],
    providers: [],
})
export class HeaderModule { }
