import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body4',
  templateUrl: './body4.component.html',
  styleUrls: ['./body4.component.css']
})
export class Body4Component implements OnInit {

  constructor(
    private readonly cadastro4: Router
  ) { }

  ngOnInit(): void {
  }
  visualizarCurriculo(): void{
    this.cadastro4.navigate(['/visualizarCurriculo']);
  }
  vagasDisponiveis(): void{
    this.cadastro4.navigate(['/vagasDisponiveis']);
  }
}
