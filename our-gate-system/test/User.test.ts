import User from '../clases/User';

describe('test User class', () => {
	let user: User;

	const name = 'Tom';
	const message = 'test';

	beforeEach(() => {
		user = new User(name);
	});

	it('method notification should be call console.log', () => {
		const spy = jest.spyOn(global.console, 'log');

		user.notification(message);

		expect(spy).toHaveBeenCalled();

		expect(spy).toHaveBeenCalledTimes(1);

		expect(spy).toHaveBeenCalledWith(`${name} was notified that ${message}`);
	});
});