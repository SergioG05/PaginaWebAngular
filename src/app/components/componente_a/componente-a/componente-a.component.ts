import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }

  suma:number=0
  suma2: number=0
  vector: string[] = []

  ngOnInit(): void {
    this.total()
    
  }
  
  nombre:String;
public navPag2()
{
  this.router.navigate(['Pagina2'])
}

 total()
 {
  let numero1: number = 3;
  let numero2: number = 4;
  
  this.suma=numero1+numero2;

  console.log(this.suma);//Para mostrar en la consola de Chrome

  this.suma2=this.suma+5;
  

  this.total2(this.suma2)
}

total2(sum:number){
  console.log("Multiplicacion = ",sum*2)
}

}
