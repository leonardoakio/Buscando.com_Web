import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-cidades',
  templateUrl: './body-cidades.component.html',
  styleUrls: ['./body-cidades.component.css']
})
export class BodyCidadesComponent implements OnInit {

  constructor(
    private readonly cidades: Router
  ) { }

  ngOnInit(): void {
  }
  saibaMais(): void{
    this.cidades.navigate(['/saibaMais']);
  }
}
