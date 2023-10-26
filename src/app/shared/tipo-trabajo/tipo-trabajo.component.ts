import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenInterface } from 'src/app/core/interfaces/ImagenInterface';


@Component({
  selector: 'shared-tipo-trabajo',
  templateUrl: './tipo-trabajo.component.html',
  styleUrls: ['./tipo-trabajo.component.css']
})
export class TipoTrabajoComponent {
    @Input() public tituloTipotrabajo: string = "";
    @Input() public listaImagenes:ImagenInterface[] = [];

    private router: Router;


    public constructor(router: Router){
        this.router = router;
    }


    public visualizarDisenio(imgSrc: string) {
        // mando al usuario a la pagina diseño:imgSrc, siendo imgSrc un recurso que usaré en la otra página
        let objImagen: ImagenInterface = {imgSrc: imgSrc};
        
        this.router.navigate(['disenio', objImagen]);
    }

    // fin clase
}
