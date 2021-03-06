import 'jest-console';

import GateController from "../clases/GateController";

describe('test GateController class', () => {
	const victim = { notification(message: string) { } };

	let gateController: GateController;
	let gate: any;
	let car: any;
	let observers: any[];

	beforeEach(() => {
		jest.useFakeTimers();
		jest.spyOn(global, 'setTimeout');

		gate = {
			gatePending: false,
			closingLevel: 9,
			timerState: 5,
			closed: false
		};

		car = {
			nearby: false
		}

		observers = [victim, victim];

		gateController = new GateController(gate, car, observers);
	});

	it('method toggleGate should call method openGate, toggle and setTimeout', () => {
		gate.closed = true;

		gateController.toggleGate();

		expect(gate.gatePending).toBe(true);

		expect(gate.closed).toBe(false);

		expect(setTimeout).toHaveBeenCalledTimes(gate.closingLevel);
	});

	it('method toggleGate should call method closeGate, toggle and setTimeout', () => {
		gateController.toggleGate();

		expect(gate.closed).toBe(true);

		expect(setTimeout).toHaveBeenCalledTimes(gate.closingLevel);
	});
});