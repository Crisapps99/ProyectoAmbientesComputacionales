import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';

import { Nota } from '../../models/nota';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vista-notas',
  standalone: false,
  
  templateUrl: './vista-notas.component.html',
  styleUrl: './vista-notas.component.css'
})
export class VistaNotasComponent implements OnInit {
  listNotas:Nota[] = [];
  listOrdenadasPorNombre: Nota[] = [];
  listOrdenadasPorParalelo:Nota[] = [];

    constructor(private _notaService:NotaService,
        private toastr: ToastrService
      ){}
      ngOnInit():void{
        this.obtenerNota();
      }
      obtenerNota(){
        this._notaService.getNotas().subscribe(data=>{
          console.log(data);
          this.listNotas= data;

          this.listOrdenadasPorNombre = [ ... this.listNotas];
          this.ordenarPorNombre();

          this.listOrdenadasPorParalelo = [...this.listNotas]; 
          this.ordenarPorParalelo();
        }, error =>{
          console.log(error);
        })
      }

      ordenarPorParalelo(){
        this.listOrdenadasPorParalelo.sort((a,b)=>{
          const paraleloA = a.paralelo.toLocaleLowerCase();
          const paraleloB = b.paralelo.toLocaleLowerCase();
          if(paraleloA < paraleloB){
            return -1; // debe ir antes que b
          }
          if(paraleloA>paraleloB){
            return 1 ; //a debe ir despues que b
          }
          return 0;// a y b son iguales
        });
      }
        ordenarPorNombre(){
          this.listOrdenadasPorNombre.sort((a,b)=>{
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
