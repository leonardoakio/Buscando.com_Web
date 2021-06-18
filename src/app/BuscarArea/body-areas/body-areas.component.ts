import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-areas',
  templateUrl: './body-areas.component.html',
  styleUrls: ['./body-areas.component.css']
})
export class BodyAreasComponent implements OnInit {

  constructor(
    private readonly areas: Router
  ) { }

  ngOnInit(): void {
  }
  saibaMais(): void{
    this.areas.navigate(['/saibaMais']);
  }
}
