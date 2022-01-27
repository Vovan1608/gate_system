import Car from "../clases/Car";

describe('test Car class', () => {
	let car: Car;

	beforeEach(() => {
		car = new Car();
	});

	it('method attach adds observer into observers[]', () => {
		const spy = jest.spyOn(car, 'attach');

		car.attach('Bob');

		expect(spy).toHaveBeenCalledWith('Bob');
	});
});