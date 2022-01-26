import CarType from "../interfaces/CarType";
// import Garage from "./Garage";
// import Notification from "./Notification";

export default class Car implements CarType {
	public isNearby: boolean = false;
	private observers: any[] = [];

	get nearby() {
		return this.isNearby;
	}

	set nearby(value: boolean) {
		this.isNearby = value;
	}

	public attach(observer: any): void {
		this.observers.push(observer);
	}

	public notify(): void {
		console.log('Car: Notifying to my garage...');
		this.observers.map(observer => observer.updateCarState(this.isNearby));
	}

	public carIsComing(value: boolean): void {
		this.nearby = value;

		console.log(`Car: I am in the zone of Gate System, so my nearby is: ${this.nearby}`);

		this.notify();
	}
}