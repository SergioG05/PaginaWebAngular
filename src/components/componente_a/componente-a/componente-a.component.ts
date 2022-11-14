import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
navegacion1()
{
  this.router.navigate(['Pagina2'])
}

navegacion2()
{
  this.router.navigate(['Pagina3'])
}



}
