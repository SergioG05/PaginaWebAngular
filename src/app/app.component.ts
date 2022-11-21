import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor (private router: Router){}

  ngOnInit(): void {
    
  }
  navegacionInicio(){
    this.router.navigate([''])
  }

  navegacio2(){
    this.router.navigate(['Pagina2']);
  }

  navegacion3(){
    this.router.navigate(['Pagina3'])
  }

  

  title = 'pagina';
}
