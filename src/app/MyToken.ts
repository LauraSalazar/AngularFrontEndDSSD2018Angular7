export class MyToken{

	get copyright(){
	return this.copyright;
	}
	set copyright(value) {
	this.copyright = value;
	}

	get user_id() {
	return this.user_id;
	}
	set user_id(value) {
    this.user_id = value;
	}

	get user_name() {
	return this.user_name;
	}
	set user_name(value) {
	this.user_name = value;
	}

  get session_id(){
  return this.session_id;
  }
  set session_id(value) {
  this.session_id = value;
  }

  get conf() {
  return this.conf;
  }
  set conf(value) {
    this.conf = value;
  }

  get is_technical_user() {
  return this.is_technical_user;
  }
  set is_technical_user(value) {
  this.is_technical_user = value;
  }

  get version() {
  return this.version;
  }
  set version(value) {
  this.version = value;
  }
	constructor(
    copyright: string,
    user_id: string,
    user_name: string,
    session_id: string,
    conf: string,
    is_technical_user: string,
    version: string) {

	}
}
