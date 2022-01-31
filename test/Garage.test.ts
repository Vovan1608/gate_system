import 'jest-console';

import Garage from "../clases/Garage";

describe('test Garage class', () => {
	let garage: Garage;

	const car = {};

	const observers = [];

	beforeEach(() => {
		garage = new Garage(car);
	});

	it('method attach should be called', () => {
		const spy = jest.spyOn(garage, 'attach');

		garage.attach(observers);

		expect(spy).toBeCalledWith(observers);
	});

	it('should call method notification', () => {
		const observer = {
			notification: (message) => {
				console.log(message);
			}
		};

		const spy = jest.spyOn(observer, 'notification');

		garage.attach(observer);

		garage.updateCarState(true);

		expect(spy).toHaveBeenCalled();
	});
});

