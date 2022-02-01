import 'jest-console';

import Car from "../clases/Car";
import Garage from "../clases/Garage";

jest.mock("../clases/Garage");

describe('test Car class', () => {
	let car: Car;

	beforeEach(() => {
		car = new Car();
	});

	it('should set isNerby prop', () => {
		expect(car.nearby).toBe(false);

		car.nearby = true;

		expect(car.nearby).toBe(true);
	});

	it('method observer.updateCarState is called', () => {
		const garage = new Garage(car);

		const spy = jest.spyOn(garage, 'updateCarState');

		car.attach(garage);

		car.notify();

		expect(spy).toHaveBeenCalled();
	});


	it('should ', () => {
		const spyNotify = jest.spyOn(car, 'notify');

		expect(car.nearby).toBe(false);

		car.carIsComing(true);

		expect(spyNotify).toHaveBeenCalled();

		expect(car.nearby).toBe(true);
	});
});