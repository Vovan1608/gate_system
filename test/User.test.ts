import User from '../clases/User';

describe('test User class', () => {
	let user: User;

	const name = 'Tom';

	beforeEach(() => {
		user = new User(name);
	});

	it('method notification should be called with message', () => {
		const spy = jest.spyOn(user, 'notification');
		const message = 'test';

		user.notification(message);

		expect(spy).toBeCalledWith(message);
	});
});