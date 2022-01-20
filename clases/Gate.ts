import GateType from '../interfaces/GateType';

export default class Gate implements GateType {
	private isClosed: boolean = true;
	private level: number = 10;

	get closingLevel(): number {
		return this.level;
	}

	set closingLevel(value: number) {
		this.level = value;
	}

	get closed(): boolean {
		return this.isClosed;
	}

	set closed(value: boolean) {
		this.isClosed = value;
	}
}