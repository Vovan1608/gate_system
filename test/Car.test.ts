import 'jest-console';

import Car from "../clases/Car";

describe('test Car class', () => {
	let car: Car;

	beforeEach(() => {
		car = new Car();
	});

	it('method attach is called', () => {
		const spy = jest.spyOn(car, 'attach');

		car.attach('Bob');

		expect(spy).toHaveBeenCalledWith('Bob');
	});

	it('method notify is called', () => {
		const spy = jest.spyOn(car, 'notify');

		car.notify();

		expect(spy).toHaveBeenCalled();
	});

	it('method notify is called', () => {
		const spyCarisComing = jest.spyOn(car, 'carIsComing');
		const spyNotify = jest.spyOn(car, 'notify');

		car.carIsComing(true);

		expect(spyCarisComing).toHaveBeenCalledWith(true);

		expect(spyNotify).toHaveBeenCalled();
	});
});