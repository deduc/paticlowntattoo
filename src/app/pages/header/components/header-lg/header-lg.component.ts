import { Component } from '@angular/core';

import { HeaderService } from '../../header.service';

@Component({
  selector: 'pages-header-lg',
  templateUrl: './header-lg.component.html',
  styleUrls: ['./header-lg.component.css']
})
export class HeaderLgComponent {
    constructor(private headerService: HeaderService){}
    
    public mostrarUbicacion(){
        this.headerService.openDialog();
    }
}
