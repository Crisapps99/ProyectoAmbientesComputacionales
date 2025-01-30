export class Nota{
    _id?:number;
    nombre: string;
    curso: number;
    paralelo: string;
    materia: string;
    nota1: number;
    nota2: number;
    nota3: number;
    notaP: number;
    notaF: number;

    constructor(nombre: string, curso: number, paralelo: string, materia:string, nota1: number,nota2:number,nota3:number,notaP:number,notaF:number){
        this.nombre = nombre;
        this.curso = curso;
        this.paralelo = paralelo;
        this.materia= materia;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.notaP = notaP;
        this.notaF = notaF;
    }
}