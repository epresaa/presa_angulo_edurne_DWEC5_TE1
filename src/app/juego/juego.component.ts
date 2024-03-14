import { Component } from '@angular/core';
import { Configuracion } from '../models/Configuracion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
  // Atributos
  public config: Configuracion = new Configuracion("","",0,0) ;   // Objeto config de tipo Configuracion: almacenará la información de configuracion
  public saludo: boolean = false;
  public randomNum: number = 0;
  public intento: number = 0;
  public contador: number = 0;
  public mostrar: boolean = false;
  public adivinado: boolean = false;
  public arrIntentos: Array<number> = [];
  public pierde: boolean = false;
  public terminado: boolean = false;

  // Métodos
  /* Funcion recogerDatos: 
   *  - usa la directiva NgForm para validar el formulario en un if-else
   *  - indica en la variable saludo que se han recogido nombre y apellido y se debe saludar
   *  - genera un número aleatorio
   */
  recogerDatos(formu: NgForm): void {
    // La directiva comprueba si los campos required se han cumplimentado
    if(formu.invalid) {
      alert("¡Error! Debe rellenar todos los campos del formulario");
      return;
    } if(this.config.rangoNumeros <= 0 || this.config.intentos <= 0) {
      alert("¡Error! El rango y los intentos deben ser superiores a 0");
      return;
    } else {
      // Saludar
      this.saludo = true;

      // Generar num aleatorio 
      this.randomNum = this.generarNumAleatorio(this.config.rangoNumeros);
      console.log("Número aleatorio generado: " + this.randomNum);

      // Inicializa contador
      this.contador = this.config.intentos;
    }
  }

  // Funcion generarNumAleatorio
  generarNumAleatorio(max: number) : number {
    let n = Math.floor(Math.random() * (max + 1));
    return n;
  }

  // Funcion enviarIntento
  enviarIntento(): void {
    // Valida intento
    if (this.intento === null || this.intento === undefined || isNaN(this.intento)) {
      alert("¡Error! El campo no puede estar vacío: debes introducir un número");
      return;
    }
    if(this.intento < 0 || this.intento > this.config.rangoNumeros) {
      alert("El número introducido no está en el rango de números generados: entre 0 y " + this.config.rangoNumeros)
      return;      
    }
    
    // Quita un intento
    this.contador--;
    this.mostrar = true; 
    
    // Lo guardo en el array
    this.arrIntentos.push(this.intento);

    // Si Adivina
    if(this.intento === this.randomNum) {
      this.adivinado = true;
    }

    // Si Pierde
    if(this.contador == 0) {
      this.pierde = true;
    }

    // Deshabilitar el boton: he añadido esta funcionalidad para que el jugador no pueda seguir pulsando el botón después de ganar o perder
    if(this.adivinado || this.contador === 0) {
      this.terminado = true;
    }
  }
}
