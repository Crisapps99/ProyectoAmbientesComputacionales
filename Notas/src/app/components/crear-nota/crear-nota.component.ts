import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nota } from '../../models/nota';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotaService } from '../../services/nota.service';
import { error } from 'console';

@Component({
  selector: 'app-crear-nota',
  standalone: false,
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {

  notaForm: FormGroup;
  titulo = 'Agregar Nueva Nota'
  id:string|null;

  constructor(private fb:FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    private _notaService:NotaService,
    private aRouter:ActivatedRoute){
    this.notaForm=this.fb.group({
      nombre:['',Validators.required],
      curso:['',Validators.required],
      paralelo:['',Validators.required],
      materia:['',Validators.required],
      nota1:['',Validators.required],
      nota2:['',Validators.required],
      nota3:['',Validators.required],
      notaP:['',Validators.required],
      notaF:['',Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void{
    this.esEditar();
  }

  agregarNota(){
    const NOTA: Nota ={
      nombre : this.notaForm.get('nombre')?.value,
      curso : this.notaForm.get('curso')?.value,
      paralelo : this.notaForm.get('paralelo')?.value,
      materia : this.notaForm.get('materia')?.value,
      nota1 : this.notaForm.get('nota1')?.value,
      nota2 : this.notaForm.get('nota2')?.value,
      nota3 : this.notaForm.get('nota3')?.value,
      notaP : this.notaForm.get('notaP')?.value,
      notaF : this.notaForm.get('notaF')?.value
    }
    if(this.id!==null){
      //editamos la nota
      this._notaService.editarNota(this.id,NOTA).subscribe(data=>{
        this.toastr.success('La nota fue actualizado con exito!', 'La Nota actualizada!');
        this.router.navigate(['/listar-nota']);
      }, error=>{
        console.log(error);
        this.notaForm.reset();
      })
    }else{
      //agregamos nota
      console.log(NOTA);
    this._notaService.guardarNota(NOTA).subscribe(data=>{
      this.toastr.success('La nota fue registrado con exito!', 'La Nota Registrado fun!');
      this.router.navigate(['/listar-nota']);
    }, error=>{
      console.log(error);
      this.notaForm.reset();
    })
    }
    
    
  }
  esEditar(){
    if(this.id!==null){
      this.titulo = 'Editar Nota';
      this._notaService.obtenerNota(this.id).subscribe(data=>{
        this.notaForm.setValue({
          nombre:data.nombre,
          curso:data.curso,
          paralelo:data.paralelo,
          materia:data.materia,
          nota1:data.nota1,
          nota2:data.nota2,
          nota3:data.nota3,
          notaP:data.notaP, 
          notaF:data.notaF
        })
      })
    }

  }
}
