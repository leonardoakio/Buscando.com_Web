import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private readonly header: Router
  ) {
  }
  ngOnInit(): void {
  }

  menu(): void {
    this.header.navigate(['/menu']);
  }

  login(): void {
    this.header.navigate(['/login']);
  }

  register(): void {
    this.header.navigate(['/register']);
  }

  anunciarVaga(): void {
    this.header.navigate(['/anunciarVaga']);
  }

  cadastrarCurriculo(): void {
  this.header.navigate(['/cadastrarCurriculo']);
  }

}
