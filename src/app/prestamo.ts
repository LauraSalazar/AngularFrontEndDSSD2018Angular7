/**
 * New typescript file
 */
export class Prestamo {
    constructor(public idPrestamo: number,
        public fechaInicio: string,
        public fechaFin: string,
        public idBicicleta: number,
        public idPersona: number,
        public idDenuncia: number,
        public ubicacionActual: string,
        public numeroCuadro: string,
        public nombreUsuario: string,
        public comentario: string,
        public denunciada: boolean,
        ) {

    }
   }
