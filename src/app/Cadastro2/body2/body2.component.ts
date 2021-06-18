import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit {

  constructor(
    private readonly cadastro2: Router
  ) { }

  ngOnInit(): void {
  }

  cotinuarPcD(): void{
    this.cadastro2.navigate(['/continuarPcD']);
  }

}
