import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {

  constructor(
    private readonly cadastro: Router
  ){}
  ngOnInit(): void {
  }

  queroMinhaVaga(): void{
    this.cadastro.navigate(['/queroMinhaVaga']);
  }

}
