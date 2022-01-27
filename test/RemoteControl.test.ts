import RemoteControl from "../clases/RemoteControl";

describe('test constructor', () => {
	it('should work', () => {
		const garage = {
			gateInstance: 'something'
		}
		expect(garage).toEqual({ gateInstance: 'something' });
	});
});