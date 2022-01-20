import CarType from "../interfaces/CarType";
import Garage from "./Garage";

export default class Car implements CarType {
	public nearby: boolean = false;
	private observers: Garage[] = [];

	public attach(observer: Garage): void {
		this.observers.push(observer);
	}

	public notify(): void {
		console.log('Car: Notifying to my garage...');
		this.observers.map(observer => observer.update(this));
	}

	public carIsComing(): void {
		this.nearby = true

		console.log(`Car: I am in the zone of Gate System, so my nearby is: ${this.nearby}`);

		this.notify();
	}
}