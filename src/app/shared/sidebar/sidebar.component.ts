import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    // Este cod CSS coloca la mainita en el puntero cuando pasa por un li de este componente
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
