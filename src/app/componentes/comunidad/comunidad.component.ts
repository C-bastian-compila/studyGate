import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {


  activeId=1;

  grupo=[
    {"nombre":"LGM","detalle":"El mejor grupo de chile"},
    {"nombre":"U. de chile","detalle":"Muy bueno dicen por ahi"},
    {"nombre":"Hola grupo","detalle":"Algo parecido a 'Hola mundo'"},
    {"nombre":"Q tal","detalle":"Solo usuarios nuevos"}
  ];

  discusion=[
    {"tema":"Opinion sobre la pagina","respuestas":"9"},
    {"tema":"Chile y su avance","respuestas":"2"},
    {"tema":"Pagina en decadencia","respuestas":"67"}
  ]
  
  noticia=[
    {"titulo":"Actualizacion de la pagina","resumen":"Nuevos cambios en la pagina que daran una mejor optimizacion"},
    {"titulo":"Pagina responsiva","resumen":"Implementacion de bootstrap en Study Gate"},
    {"titulo":"Nuevo apartado de noticias","resumen":"Reestructuracion de la pagina web lleva a nuevos cambios"}
  ]

  todo=[
    {"seccion":"Seccion","detalle":"Detalle"}
  ]

  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

}
