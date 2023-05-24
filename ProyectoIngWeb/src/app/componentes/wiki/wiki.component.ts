import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})

export class WikiComponent {
  //Se insertan Objectos json de manera aleatoria//
  //Así se elige solo un contenido de la lista escrita en los .json //
  jsonArticulos : any;
  jsonRecursos : any;
  articulo : any;
  recurso : any;

  constructor(private httpClient: HttpClient){
    this.httpClient.get('assets/articulos.json').subscribe((res) =>{
      this.jsonArticulos = res;
      /*console.log(this.jsonArticulos); */
      const randIndexArticulo= Math.floor(Math.random() * this.jsonArticulos.length);
      this.articulo = this.jsonArticulos[randIndexArticulo];
    })

    this.httpClient.get('assets/recursosDelDia.json').subscribe((res) => {
      this.jsonRecursos = res;
      const randIndexRecurso = Math.floor(Math.random() * this.jsonRecursos.length);
      this.recurso = this.jsonRecursos[randIndexRecurso]; 
    })
  }
}