// Clase configuración: 
export class Configuracion {
    nombre: string;
    apellido: string;
    rangoNumeros: number;        // Incluye null para que no se tenga que indicar un valor 0 al inicializar
    intentos: number;            // Incluye null para que no se tenga que indicar un valor 0 al inicializar
  
    constructor(nombre: string, apellido: string, rangoNumeros: number, intentos: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rangoNumeros = rangoNumeros;
        this.intentos = intentos;
    }
}