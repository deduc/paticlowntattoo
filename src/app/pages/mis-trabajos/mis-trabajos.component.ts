import { Component, OnInit } from '@angular/core';
import { ImagenInterface } from 'src/app/core/interfaces/ImagenInterface';

@Component({
    selector: 'pages-mis-trabajos',
    templateUrl: 'mis-trabajos.component.html'
})

export class MisTrabajosComponent implements OnInit {
    public titulo1: string = "";
    public titulo2: string = "";
    public titulo3: string = "";

    public imagenes1: ImagenInterface[] = []
    public imagenes2: ImagenInterface[] = []
    public imagenes3: ImagenInterface[] = []
    
    constructor() { 
        this.titulo1 = "Línea";
        this.titulo2 = "BlackWork";
        this.titulo3 = "Ignorant";

        this.imagenes1 = [
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
        ]
        this.imagenes2 = [
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
        ]
        this.imagenes3 = [
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
        ]
    }

    ngOnInit() { }
}