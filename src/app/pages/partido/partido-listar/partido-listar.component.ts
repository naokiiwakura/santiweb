import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../../services/partido.service';

@Component({
  selector: 'ngx-partido-listar',
  templateUrl: './partido-listar.component.html',
  styleUrls: ['./partido-listar.component.scss'],
})
export class PartidoListarComponent implements OnInit {


  listaPartido: any[];

  constructor(private service: PartidoService) {
    this.service.listarPartidos().subscribe(p => {
      this.listaPartido = p;
    });
  }

  ngOnInit(): void {
  }

}
