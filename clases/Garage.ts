import GarageType from '../interfaces/GarageType';

import GateType from '../interfaces/GateType';
import Gate from '../clases/Gate';

import CarType from '../interfaces/CarType';
import Car from './Car'

export default class Garage implements GarageType {
	private gate: GateType = new Gate();
	private car: CarType = new Car();
	private timeouts = [] as any;
	public timer: number = 10000;

	set delay(value: number) {
		this.timer = value;
	}

	get delay(): number {
		return this.timer;
	}

	public toggleGate() {
		let speed = 0;

		if (this.timeouts.length) {
			this.cleanAllTimeouts();
		} else {

			// if (this.gate.closed) {
			// 	this.openGate(speed);
			// } else {
			// 	this.closeGate(speed);
			// }
			if (this.gate.closed) {

				for (let i = this.gate.closingLevel; i > 0; i--) {
					this.timeouts.push(setTimeout(() => {
						console.log(`Full opening after ${this.gate.closingLevel--} cek`);

						if (this.gate.closingLevel === 0) {
							this.gate.closingLevel = 1;

							console.log('Gate is fully opened');

							setTimeout(() => {
								this.cleanAllTimeouts();
								this.toggleGate();
							}, this.timer);

							for (let i = this.timer, j = this.timer; i > 0; i -= 1000) {
								setTimeout(() => { console.log(`${i / 1000} sec left to start closing`); }, j -= 1000)
							}

						}
					}, speed += 1000));
				}

			} else {

				for (let i = this.gate.closingLevel; i < 11; i++) {
					this.timeouts.push(setTimeout(() => {
						console.log(`Full closing after ${this.gate.closingLevel++} cek`);

						if (this.gate.closingLevel === 11) {
							this.gate.closingLevel = 10;
						}

					}, speed += 1000));
				}
			}

			this.gate.closed = !this.gate.closed;
		}
	}

	// private openGate(speed: number) {
	// 	for (let i = this.gate.closingLevel; i > 0; i--) {

	// 		this.timeouts.push(setTimeout(() => {
	// 			console.log(`Full opening after ${this.gate.closingLevel--} cek`);
	// 		}, speed += 1000));

	// 		if (this.gate.closingLevel === 0) {
	// 			this.gate.closingLevel = 1;

	// 			console.log('Gate is fully opened');
	// 			setTimeout(() => this.closeGate(speed), 10000);
	// 		}
	// 	}

	// }

	// private closeGate(speed: number) {
	// 	for (let i = this.gate.closingLevel; i < 11; i++) {
	// 		if (!this.car.nearby) {
	// 			this.timeouts.push(setTimeout(() => {
	// 				console.log(`Full closing after ${this.gate.closingLevel++} cek`);
	// 			}, speed += 1000));
	// 		}
	// 	}
	// }

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
			if (this.gate.closingLevel) {
				this.cleanAllTimeouts();
				this.toggleGate();
			}
		}
	}

	// public close() {
	// 	setTimeout(() => {
	// 		this.cleanAllTimeouts();
	// 		this.toggleGate();
	// 	}, this.timer);
	// }
}