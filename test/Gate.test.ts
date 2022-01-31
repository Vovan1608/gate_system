import Gate from "../clases/Gate";

describe('test Gate class', () => {
	let gate: Gate;

	beforeEach(() => {
		gate = new Gate();
	});


	it('setter closingLevel should set level to 25', () => {
		const level = 10;

		expect(gate.closingLevel).toBe(level);

		gate.closingLevel = 25;

		expect(gate.closingLevel).toBe(25);
	});


	it('setter timerState should set level to 650', () => {
		const timer = 10;

		expect(gate.timerState).toBe(timer);

		gate.timerState = 650;

		expect(gate.timerState).toBe(650);
	});


	it('setter speedState should set level to 70', () => {
		const duration = 10;

		expect(gate.speedState).toBe(duration);

		gate.speedState = 70;

		expect(gate.speedState).toBe(70);
	});

	it('setter closed should set isClosed to false', () => {
		expect(gate.closed).toBe(true);

		gate.closed = false;

		expect(gate.closed).toBe(false);
	});
});