import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-cadastro-empresa1',
  templateUrl: './body-cadastro-empresa1.component.html',
  styleUrls: ['./body-cadastro-empresa1.component.css']
})
export class BodyCadastroEmpresa1Component implements OnInit {

  constructor(
    private readonly cadastroEmpresa1: Router
  ) { }

  ngOnInit(): void {
  }

  continuarCadastroEmpresa(): void{
    this.cadastroEmpresa1.navigate(['/continuarCadastroEmpresa']);
  }
}
