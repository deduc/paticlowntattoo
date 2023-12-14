import { Component } from '@angular/core';
import { HeaderService } from '../../header.service';

@Component({
  selector: 'pages-header-sm-md',
  templateUrl: './header-sm-md.component.html',
  styleUrls: ['./header-sm-md.component.css']
})
export class HeaderSmMdComponent {
    constructor(private headerService: HeaderService){}
    
    public mostrarUbicacion(){
        this.headerService.openDialog();
    }
}
