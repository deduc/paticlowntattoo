import { Component } from '@angular/core';

// mis componentes
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'shared-visualizar-disenio',
  templateUrl: './visualizar-disenio.component.html',
  styleUrls: ['./visualizar-disenio.component.css']
})
export class VisualizarDisenioComponent {
    public imgSrc: string = "";
    private route: ActivatedRoute

    
    constructor(route: ActivatedRoute) {
        this.route = route;

        this.route.params.subscribe(params => {
            this.imgSrc = params['imgSrc'];
        });
    }
    
}