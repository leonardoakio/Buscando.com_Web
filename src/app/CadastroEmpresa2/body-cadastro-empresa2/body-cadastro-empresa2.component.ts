import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-cadastro-empresa2',
  templateUrl: './body-cadastro-empresa2.component.html',
  styleUrls: ['./body-cadastro-empresa2.component.css']
})
export class BodyCadastroEmpresa2Component implements OnInit {

  constructor(
    private readonly cadastroEmpresa2: Router
  ) { }

  ngOnInit(): void {
  }
  finalizarVaga(): void{
    this.cadastroEmpresa2.navigate(['/finalizarVaga']);
  }
}
