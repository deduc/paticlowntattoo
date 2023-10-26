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

    public blackwork: ImagenInterface[] = []
    public ignorant: ImagenInterface[] = []
    public linea: ImagenInterface[] = []
    
    constructor() { 
        this.titulo1 = "Línea";
        this.titulo2 = "BlackWork";
        this.titulo3 = "Ignorant";

        this.blackwork = [
            { imgSrc: "./assets/blackwork/espadachin.webp" },
            { imgSrc: "./assets/blackwork/serpiente.webp" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
        ]
        this.ignorant = [
            { imgSrc: "./assets/ignorant/amongus.webp" },
            { imgSrc: "./assets/ignorant/flores.webp" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
        ]
        this.linea = [
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
            { imgSrc: "./assets/imagenDePrueba.png" },
        ]
    }

    ngOnInit() { }
}