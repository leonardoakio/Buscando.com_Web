import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-cadastro-empresa',
  templateUrl: './body-cadastro-empresa.component.html',
  styleUrls: ['./body-cadastro-empresa.component.css']
})
export class BodyCadastroEmpresaComponent implements OnInit {

  constructor(
    private readonly cadastroEmpresa: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarVaga(): void{
    this.cadastroEmpresa.navigate(['/cadastrarVaga']);
  }
}
