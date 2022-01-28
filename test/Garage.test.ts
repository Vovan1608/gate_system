import Garage from "../clases/Garage";

import Gate from "../clases/Gate";

jest.mock('../clases/Gate');

describe('test Garage class', () => {
	let garage: Garage;

	const car = {};

	const observers = [];

	beforeEach(() => {
		garage = new Garage(car);
	});

	it('method updateCarState should toggleGate and cleanAllTimeouts if gatePending=false', () => {
		const spyUpdateCarState = jest.spyOn(garage, 'updateCarState');

		garage.updateCarState(false);

		expect(spyUpdateCarState).toHaveBeenCalledWith(false);
	});

	it('getter gateInstance return Gate instance', () => {
		const gateInstance = garage.gateInstance;

		expect(gateInstance).toBeInstanceOf(Gate);
	});

	it('method attach should be called', () => {
		const spy = jest.spyOn(garage, 'attach');

		garage.attach(observers);

		expect(spy).toBeCalledWith(observers);
	});

	it('method toggleGate should be called', () => {
		const spy = jest.spyOn(garage, 'toggleGate');

		garage.toggleGate();

		expect(spy).toBeCalled();
	});
});

