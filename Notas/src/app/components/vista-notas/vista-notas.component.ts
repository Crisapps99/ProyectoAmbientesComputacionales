import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';

import { Nota } from '../../models/nota';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-notas',
  standalone: false,
  
  templateUrl: './vista-notas.component.html',
  styleUrl: './vista-notas.component.css'
})
export class VistaNotasComponent implements OnInit {
  listNotas:Nota[] = [];
  listOrdenadasPorNombre: Nota[] = [];
  searchText:string='';

    constructor(private _notaService:NotaService,
        private toastr: ToastrService,
        private router:Router
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

         
        }, error =>{
          console.log(error);
        })
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
