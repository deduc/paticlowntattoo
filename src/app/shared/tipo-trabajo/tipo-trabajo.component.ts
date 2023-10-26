import { Component, Input } from '@angular/core';
import { ImagenInterface } from 'src/app/core/interfaces/ImagenInterface';


@Component({
  selector: 'shared-tipo-trabajo',
  templateUrl: './tipo-trabajo.component.html',
  styleUrls: ['./tipo-trabajo.component.css']
})
export class TipoTrabajoComponent {
    @Input() public tituloTipotrabajo: string = "";
    @Input() public listaImagenes:ImagenInterface[] = [];

}
