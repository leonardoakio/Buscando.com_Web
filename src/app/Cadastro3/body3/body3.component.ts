import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body3',
  templateUrl: './body3.component.html',
  styleUrls: ['./body3.component.css']
})
export class Body3Component implements OnInit {

  constructor(
    private readonly cadastro3: Router
  ) { }

  ngOnInit(): void {
  }
  finalizarCadastro(): void{
    this.cadastro3.navigate(['/finalizarCadastro']);
  }
}
