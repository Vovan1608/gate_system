import 'jest-console';

import Garage from "../clases/Garage";

describe('test Garage class', () => {
	let garage: Garage;

	const car = {};

	const observers = [];

	beforeEach(() => {
		garage = new Garage(car);
	});

	it('should notify event subscribers', () => {
		const observer = { notification: (message) => { } };

		const spy = jest.spyOn(observer, 'notification');

		garage.attach(observer);

		garage.updateCarState(true);

		expect(spy).toHaveBeenCalled();
	});
});

