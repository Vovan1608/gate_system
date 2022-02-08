export default class GateController {
	private gate: any;
	private car: any;
	private timeouts = [] as any;
	private observers: any[];

	constructor(gate: any, car: any, observers: any[]) {
		this.gate = gate;
		this.car = car;
		this.observers = observers;
	}

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
		this.gate.gatePending = true;

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

		const message = 'Stop gate';

		this.notificatAllObservers(message)
	}

	private makeDelay() {

		const message = 'Gate is fully opened';

		this.countDown();

		setTimeout(() => {
			this.gate.gatePending = false;

			this.cleanAllTimeouts();
			this.toggleGate();
		}, this.gate.timerState * 1000);

		this.notificatAllObservers(message);
	}

	private toggle() {
		this.gate.closed = !this.gate.closed;
	}

	private countDown() {
		for (let i = this.gate.timerState, j = 1000; i > 0; i -= 1) {
			setTimeout(() => {
				console.log(`${i} sec left to start closing`);
			}, j += 1000);
		}
	}

	private notificatAllObservers(message: string) {
		this.observers.forEach((observer) => {
			observer.notification(message)
		})
	}
}