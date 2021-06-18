import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  constructor(
    private readonly cidades: Router
  ) { }

  ngOnInit(): void {
  }
  buscaPorCidade(): void{
    this.cidades.navigate(['/buscaPorCidade']);
  }
}
