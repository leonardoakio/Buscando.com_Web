import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-cadastro-empresa3',
  templateUrl: './body-cadastro-empresa3.component.html',
  styleUrls: ['./body-cadastro-empresa3.component.css']
})
export class BodyCadastroEmpresa3Component implements OnInit {

  constructor(
    private readonly cadastrarEmpresaFinal: Router
  ) { }

  ngOnInit(): void {
  }
  visualizarVaga(): void{
    this.cadastrarEmpresaFinal.navigate(['/visualizarVaga']);
  }
  cadastrarOutraVaga(): void{
    this.cadastrarEmpresaFinal.navigate(['/cadastrarOutraVaga']);
  }
}
