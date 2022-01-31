// import GateController from "../clases/GateController";

jest.mock('../clases/GateController');
const GateController = require('../clases/GateController');

describe('test GateController class', () => {
	let gateController: typeof GateController;
	let gate: any;
	let car: any;
	let observers: any[];

	beforeEach(() => {
		gate = {
			gatePending: false,
			closingLevel: 10,
			timerState: 5,
			closed: false
		};

		car = {
			nearby: false
		}

		observers = ['user1', 'user2'];

		// jest.mock('../clases/GateController');

		gateController = new GateController(gate, car, observers);
	});

	it('method "toggleGate" should call method "cleanAllTimeouts"', () => {
		// gateController.timeouts = ['something'];

		// const gateControllerProto = Object.getPrototypeOf(gateController);

		// const spy = jest.spyOn(gateController, 'cleanAllTimeouts');
		// expect(gate.closed).toBe(false);

		// gateController.toggle();

		// expect(gate.closed).toBe(true);


		expect(gate.closed).toBe(false);

		gateController.toggle();

		expect(gate.closed).toBe(true);
	});

	it('method "toggleGate" should call ', () => {

	});
});