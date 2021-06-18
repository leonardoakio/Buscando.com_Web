import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {

  constructor(
    private readonly cadastro1: Router
  ) { }

  ngOnInit(): void {
  }

  continuarCadastro(): void{
    this.cadastro1.navigate(['/continuarCadastro']);
  }
}
