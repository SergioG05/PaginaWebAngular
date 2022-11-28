import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from 'src/app/components/componente_a/componente-a/componente-a.component';
import { ComponenteBComponent } from 'src/app/components/componente_b/componente-b.component';
import { ComponenteBModule } from 'src/app/components/componente_b/componente-b.module';
import { ComponenteCComponent } from 'src/app/components/componente_c/componente-c.component';




const routes: Routes = [
  {
    path: '', component: ComponenteAComponent
  },
  {
    path: 'Pagina2', component: ComponenteBComponent
  },
  {
    path: 'Pagina3', component: ComponenteCComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
