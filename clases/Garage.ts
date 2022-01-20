import GarageType from '../interfaces/GarageType';

import GateType from '../interfaces/GateType';
import Gate from '../clases/Gate';

import CarType from '../interfaces/CarType';
import Car from './Car'

export default class Garage implements GarageType {
	private gate: GateType = new Gate();
	private car: CarType = new Car();
	private timeouts = [] as any;
	private isCarInGateZone: boolean = false;

	get carInGateZone(): boolean {
		return this.isCarInGateZone;
	}

	set carInGateZone(value: boolean) {
		this.isCarInGateZone = value;
	}

	public toggleGate() {
		let speed = 0;

		if (this.timeouts.length) {
			this.cleanAllTimeouts();
		} else {

			if (this.gate.closed) {

				for (let i = this.gate.closingLevel; i > 0; i--) {
					this.timeouts.push(setTimeout(() => {
						console.log(`Full opening after ${this.gate.closingLevel--} cek`);
					}, speed += 1000));
				}

			} else {

				for (let i = this.gate.closingLevel; i < 10; i++) {
					this.timeouts.push(setTimeout(() => {
						console.log(`Full closing after ${this.gate.closingLevel++} cek`);
					}, speed += 1000));
				}
			}

			this.gate.closed = !this.gate.closed;
		}
	}

	private cleanAllTimeouts(): void {
		for (let i = 0; i < this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i]);
		}

		this.timeouts.length = [];

		console.log('Stop gate');
	}

	public update(subject: CarType): void {
		if (this.car instanceof Car && !this.car.nearby) {
			console.log('Garage: I reacted that my car is comming...');

			if (this.gate.closed) {
				this.cleanAllTimeouts();
				this.toggleGate();
			}
		}
	}

	public setTimer(delay = 10) {
		setTimeout(() => {

		}, delay);
	}
}