export class Login{

	get username(){
	return this.username;
	}
	set username(value) {
	this.username = value;
	}

	get password() {
	return this.password;
	}
	set password(value) {
    this.password = value;
	}

	get redirect() {
	return this.redirect;
	}
	set redirect(value) {
	this.redirect = value;
	}

	constructor(
	username: string,
	password: string,
	redirect: string) {

	}
}
