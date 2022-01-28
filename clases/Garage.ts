import { GarageType, GateType } from '../interfaces/Types';

import Gate from '../clases/Gate';
import GateController from './GateController';

export default class Garage implements GarageType {
	private gate: GateType = new Gate();
	private car: any;
	private gateController: any;
	private observers: any[] = [];

	constructor(car: any) {
		this.car = car;
		this.gateController = new GateController(this.gate, this.car, this.observers);
	}

	public updateCarState(value: boolean): void {
		const message = `Garage: I reacted that my car is under gate...${value}`;

		console.log(message);

		this.notificatAllObservers(message);

		if (!this.gate.gatePending) {
			this.gateController.cleanAllTimeouts();
			this.gateController.toggleGate();
		}
	}

	public get gateInstance(): any {
		return this.gate;
	}

	public attach(observer: any): void {
		this.observers.push(observer);
	}

	private notificatAllObservers(message: string) {
		this.observers.forEach((observer) => {
			observer.notification(message)
		})
	}

	public toggleGate() {
		this.gateController.toggleGate();
	}
}
