
export class Estacion {

  constructor(
   public id: number,
   public nombre: string,
   public codigopostal: string,
   public latitud: string,
   public longitud: string,
   public estado: string,
   public abiertodesde: string,
   public abiertohasta: string,
   public cantidadbicicletasmax: number,
) { }

}
