import GateType from '../interfaces/GateType';

export default class Gate implements GateType {
	private isClosed: boolean = true;
	private level: number = 10;
	private timer: number = 10;
	private duration: number = 10;
	private observers: any[];

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

	subscribe(observer: object): void {
		const isExist = this.observers.includes(observer);

		if (isExist) {
			return console.log(`${observer} has been attached already.`);
		}

		console.log(`${observer} attached an observer.`);
		this.observers.push(observer);
	};

	unsubscribe(observer: []): void {
		const observerIndex = this.observers.indexOf(observer);

		if (observerIndex === -1) {
			return console.log(`${observer} nonexistent observer.`);
		}

		this.observers.splice(observerIndex, 1);
		console.log(`${observer} detached an observer.`);
	};

	alert(): void {
		for (const observer of this.observers) {
			observer.update(this);
		}
	};
}
