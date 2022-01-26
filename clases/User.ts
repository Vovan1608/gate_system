export default class User {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}

	public notification(message: string) {
		// console.log(`${this.name} was notified that ${message}`)
	}
}
