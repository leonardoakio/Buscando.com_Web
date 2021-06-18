import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  constructor(
    private readonly areas: Router
  ) { }

  ngOnInit(): void {
  }
  buscaPorArea(): void{
    this.areas.navigate(['/buscaPorArea']);
  }
}
