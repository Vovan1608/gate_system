import { GateType } from '../interfaces/Types';

export default class Gate implements GateType {
	private isClosed: boolean = true;
	private level: number = 10;
	private timer: number = 10;
	private duration: number = 10;
	public gatePending: boolean = false;

	public get closingLevel(): number {
		return this.level;
	}

	public set closingLevel(value: number) {
		this.level = value;
	}

	public get closed(): boolean {
		return this.isClosed;
	}

	public set closed(value: boolean) {
		this.isClosed = value;
	}

	public get timerState(): number {
		return this.timer;
	}

	public set timerState(value: number) {
		this.timer = value;
	}

	public get speedState(): number {
		return this.duration;
	}

	public set speedState(value: number) {
		this.duration = value;
	}
}
