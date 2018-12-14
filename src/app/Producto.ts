export class Producto{

	get id(){
	return this.id;
	}
	set id(value) {
	this.id = value;
	}

	get name() {
	return this.name;
	}
	set name(value) {
    this.name = value;
	}

	get costPrice() {
	return this.costPrice;
	}
	set costPrice(value) {
	this.costPrice = value;
	}

	constructor(
	id: number,
	name: string,
	costPrice: number,
  salePrice: number,
  tipoProducto: number
) {

	}
}
