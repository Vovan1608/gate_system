import Gate from "../clases/Gate";

describe('test Gate class', () => {
	let gate: Gate;

	beforeEach(() => {
		gate = new Gate();
	});

	it('getter closingLevel should return 10', () => {
		expect(gate.closingLevel).toBe(10);
	});

	it('setter closingLevel should set level to 25', () => {
		gate.closingLevel = 25;

		expect(gate.closingLevel).toBe(25);
	});

	it('getter timerState should return 10', () => {
		expect(gate.timerState).toBe(10);
	});

	it('setter timerState should set level to 650', () => {
		gate.timerState = 650;

		expect(gate.timerState).toBe(650);
	});

	it('getter speedState should return 10', () => {
		expect(gate.speedState).toBe(10);
	});

	it('setter speedState should set level to 70', () => {
		gate.speedState = 70;

		expect(gate.speedState).toBe(70);
	});
});