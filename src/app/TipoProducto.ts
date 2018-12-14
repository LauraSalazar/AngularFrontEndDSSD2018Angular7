export class TipoProducto{

	get id(){
	return this.id;
	}
	set id(value) {
	this.id = value;
	}

	get description() {
	return this.description;
	}
	set description(value) {
    this.description = value;
	}

	get initials() {
	return this.initials;
	}
	set initials(value) {
	this.initials = value;
	}

	constructor(
	id: number,
	description: string,
	initials: string) {

	}
}