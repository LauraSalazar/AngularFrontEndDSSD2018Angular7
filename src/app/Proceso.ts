export class Proceso{

	get displayDescription(){
	return this.displayDescription;
	}
	set displayDescription(value) {
	this.displayDescription = value;
	}

	get deploymentDate() {
	return this.deploymentDate;
	}
	set deploymentDate(value) {
    this.deploymentDate = value;
	}

	get displayName() {
	return this.displayName;
	}
	set displayName(value) {
	this.displayName = value;
	}

  get name(){
	return this.name;
	}
	set name(value) {
	this.name = value;
	}

	get description() {
	return this.description;
	}
	set description(value) {
    this.description = value;
	}

	get deployedBy() {
	return this.deployedBy;
	}
	set deployedBy(value) {
	this.deployedBy = value;
	}

  get id(){
	return this.id;
	}
	set id(value) {
	this.id = value;
	}

	get activationState() {
	return this.activationState;
	}
	set activationState(value) {
    this.activationState = value;
	}

	get version() {
	return this.version;
	}
	set version(value) {
	this.version = value;
	}

  get configurationState(){
	return this.configurationState;
	}
	set configurationState(value) {
	this.configurationState = value;
	}

	get last_update_date() {
	return this.last_update_date;
	}
	set last_update_date(value) {
    this.last_update_date = value;
	}

	get actorinitiatorid() {
	return this.actorinitiatorid;
	}
	set actorinitiatorid(value) {
	this.actorinitiatorid = value;
	}

	constructor(
    displayDescription: string,
    deploymentDate: string,
    displayName: string,
    name: string,
    description: string,
    deployedBy: string,
    id: string,
    activationState: string,
    version: string,
    configurationState: string,
    last_update_date: string,
    actorinitiatorid: string) {

	}
}
