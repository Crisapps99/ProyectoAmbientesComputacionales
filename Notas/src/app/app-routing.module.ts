import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotaComponent } from './components/listar-nota/listar-nota.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { VistaNotasComponent } from './components/vista-notas/vista-notas.component';

const routes: Routes = [
  
  {path:'',component:VistaNotasComponent},
  {path:'ver-nota',component:VistaNotasComponent},
  {path:'listar-nota',component:ListarNotaComponent},
  {path:'crear-nota',component:CrearNotaComponent},
  {path:'editar-nota/:id',component:CrearNotaComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
