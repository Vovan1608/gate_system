import RemoteControl from "../clases/RemoteControl";

describe('test RemoteControle class', () => {
	let remouteControl: RemoteControl;

	const garage = {
		gateInstance: {
			timerState: 10,
			speedState: 5,
			closingLevel: 10
		}
	}

	beforeEach(() => {
		remouteControl = new RemoteControl(garage);
	});

	it('method "setTimer" should set timerState to 25', () => {
		remouteControl.setTimer(25);

		expect(garage.gateInstance.timerState).toBe(25);
	});

	it('method "setClosingSpeed" should set speedState to 15 and closingLevel to 15', () => {
		remouteControl.setClosingSpeed(15);

		expect(garage.gateInstance.speedState).toBe(15);

		expect(garage.gateInstance.closingLevel).toBe(15);
	});
});