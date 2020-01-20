import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';
  msg: string = '';
  ocultaFormActualizar: boolean = true;

  empleados = [
    {'nombre': 'Pedro', posicion: 'Manager', 'email' : 'email@email.com'},
    {'nombre': 'Eduardo', posicion: 'Diseñador', 'email' : 'email@email.com'},
    {'nombre': 'Juan', posicion: 'Programador', 'email' : 'email@email.com'}
  ];

  // Contendra de forma temporal los datos antes de actulizarlos
  model: any = {};
  model2: any = {};


  agregarEmpleado ():void {

    this.empleados.push(this.model);
    this.msg = 'Campo agregado.'

  }

  borrarEmpleado (i):void {
    
    var respuesta = confirm('¿Desea eliminar?');
    // console.log(respuesta);
    if ( respuesta ) {
      this.empleados.splice(i, 1);
    }
    this.msg = 'Campo eliminado satisfactoriamente.'

  }

  myValue;
  editarEmpleado (i):void {
    this.ocultaFormActualizar = false;
    this.model2.nombre = this.empleados[i].nombre;
    this.model2.posicion = this.empleados[i].posicion;
    this.model2.email = this.empleados[i].email;

    this.myValue = i;
    
  }

  actualizarEpleado ():void {
    let i = this.myValue;

    for( let j = 0; j < this.empleados.length; j++ ) {
      if ( i == j ) {
        this.empleados[i] = this.model2;
        this.msg = 'Campo actualizado satisfactoriamente.'
        this.ocultaFormActualizar = true;
        this.model2 = {};
      }
    }

  }

  closeAlert (): void{
    this.msg = '';
  }
}
