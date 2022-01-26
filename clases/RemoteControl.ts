export default class RemoteControl {
	private garage: any;
	private gateInstance: any;

	constructor(garage: any) {
		this.garage = garage;
		this.gateInstance = this.garage.gateInstance;
	}

	public setTimer(value: number): void {
		this.gateInstance.timerState = value;
	}

	public setClosingSpeed(value: number): void {
		this.gateInstance.speedState = value;

		this.gateInstance.closingLevel = value;
	}
}