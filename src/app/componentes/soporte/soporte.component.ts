import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    })
  }

}
