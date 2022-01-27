import GateController from "../clases/GateController";

describe('test GateController class', () => {
	let gateController: GateController;

	const gate = {
		gatePending: false,
		closingLevel: 10,
		timerState: 5,
		closed: false
	};

	const car = {
		nearby: false
	}

	const observers = ['user1', 'user2'];

	beforeEach(() => {
		gateController = new GateController(gate, car, observers);
	});

	it('should return an instance of the RemoteControl', () => {
		expect(gateController).toBeInstanceOf(GateController);
	});

	it('method toggle should be called', () => {
		const spy = jest.spyOn(gateController, 'toggleGate');

		gateController.toggleGate();

		expect(spy).toHaveBeenCalled();
	});
});