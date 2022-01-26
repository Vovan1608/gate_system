import GateType from '../interfaces/GateType';

export default class Gate implements GateType {
	private isClosed: boolean = true;
	private level: number = 10;
	private timer: number = 10;
	private duration: number = 10;

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

	get timerState(): number {
		return this.timer;
	}

	set timerState(value: number) {
		this.timer = value;
	}

	get speedState(): number {
		return this.duration;
	}

	set speedState(value: number) {
		this.duration = value;
	}
}
