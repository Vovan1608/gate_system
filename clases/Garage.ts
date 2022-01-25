import GarageType from '../interfaces/GarageType';

import GateType from '../interfaces/GateType';
import Gate from '../clases/Gate';

import CarType from '../interfaces/CarType';
import Car from './Car'

export default class Garage implements GarageType {
	private gate: GateType = new Gate();
	private car: CarType = new Car();
	private timeouts = [] as any;

	public toggleGate() {
		let speed = 0;

		if (this.timeouts.length !== 0) {
			this.cleanAllTimeouts();
		}

		if (this.timeouts.length === 0 && this.gate.closed) {
			this.openGate(speed);
		}

		if (this.timeouts.length === 0 && !this.gate.closed) {
			this.closeGate(speed);
		}
	}

	private openGate(speed: number) {
		for (let i = this.gate.closingLevel; i > 0; i--) {
			this.timeouts.push(setTimeout(() => {
				console.log(`Full opening after ${this.gate.closingLevel--} cek`);

				if (this.gate.closingLevel === 0) {
					this.makeDelay();
				}
			}, speed += 1000));
		}

		this.toggle();
	}

	private closeGate(speed: number) {
		for (let i = this.gate.closingLevel; i <= this.gate.speedState; i++) {
			if (!this.car.nearby) {
				this.timeouts.push(setTimeout(() => {
					console.log(`Full closing after ${this.gate.closingLevel++} cek`);
				}, speed += 1000));
			}
		}

		this.toggle();
	}

	private cleanAllTimeouts(): void {
		for (let i = 0; i < this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i]);
		}

		this.timeouts.length = [];

		console.log('Stop gate');
	}

	public updateCarState(value: boolean): void {
		this.car.nearby = value;

		if (value) {
			console.log(`Garage: I reacted that my car is under gate...${value}`);
		}

		if (value && this.gate.closingLevel !== 0) {
			this.cleanAllTimeouts();
			this.toggleGate();
		}
	}

	public setTimer(value: number): void {
		this.gate.timerState = value;
	}

	public setClosingSpeed(value: number): void {
		this.gate.speedState = value;

		this.gate.closingLevel = value;
	}

	private makeDelay() {
		this.gate.closingLevel = 1;

		console.log('Gate is fully opened');

		this.countDown();

		this.delay();
	}

	private countDown() {
		for (let i = this.gate.timerState, j = 1000; i > 0; i -= 1) {
			setTimeout(() => {
				console.log(`${i} sec left to start closing`);
			}, j += 1000);
		}
	}

	private delay() {
		setTimeout(() => {
			this.cleanAllTimeouts();
			this.toggleGate();
		}, this.gate.timerState * 1000 + 1000);
	}

	private toggle() {
		this.gate.closed = !this.gate.closed;
	}
}
