import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-partido',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class PartidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
