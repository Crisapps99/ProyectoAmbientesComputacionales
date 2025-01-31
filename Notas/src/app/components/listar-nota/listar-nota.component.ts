import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../models/nota';
import { ToastrService } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listar-nota',
  standalone: false,
  
  templateUrl: './listar-nota.component.html',
  styleUrl: './listar-nota.component.css'
  
})
export class ListarNotaComponent implements OnInit{
listNotas:Nota[] = [];
searchText:string='';
selectedNota: any = {};


  constructor(private _notaService:NotaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    
  ){}
  ngOnInit():void{
    this.obtenerNota();
  }

  obtenerNota(){
    this._notaService.getNotas().subscribe(data=>{
      console.log(data);
      this.listNotas= data;
      this.ordenarPorNombre();
    }, error =>{
      console.log(error);
    })
  }

  eliminarNota(id:any){
    const confirmacion= window.confirm('estas seguro que deseas eliminar');
    if(confirmacion){
      this._notaService.eliminarNota(id).subscribe(
        data=>{
          this.toastr.error('La nota fue eliminada con éxito', 'Nota eliminada');
          this.obtenerNota();
        },
        error=>{
          console.log(error)
        }
      )
    }
  }

 //metodo para calcular las notas
 calcularPromedio(notas: any):number{
  //convertimos las notas a numeros
  const nota1=parseFloat(notas.nota1);
  const nota2=parseFloat(notas.nota2);
  const nota3=parseFloat(notas.nota3);
  const notaP=parseFloat(notas.notaP);
  const notaF=parseFloat(notas.notaF);

  //verifica que todas las notas sean numeros validos
  if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || (isNaN(notaP) || (isNaN(notaF)))){
    console.error('una o mas notas no son numeros validos');
    return 0;
  }
  //calcula el promedio
  const promedio=(nota1 + nota2+ nota3 +notaP + notaF)/5;
  //redondea a 2 decimales
  return Math.round(promedio*100)/100;
 }

 //metodo apra determinar si est aaprobado o reporbado 
 estado(notas:any):boolean{
  const promedio=this.calcularPromedio(notas);
  return promedio >=7;
 }
  
 ordenarPorNombre(){
  this.listNotas.sort((a,b)=>{
    const nombreA = a.nombre.toLocaleLowerCase();
    const nombreB = b.nombre.toLocaleLowerCase();

    if(nombreA<nombreB){
      return -1;
    }
    if(nombreA>nombreB){
      return 1;
    }
    return 0;
  });
}

}
