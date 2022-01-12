/**
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками.
 */
interface Subject {
	// Присоединяет наблюдателя к издателю.
	subscribe(observer: Observer): void;

	// Отсоединяет наблюдателя от издателя.
	unsubscribe(observer: Observer): void;

	// Уведомляет всех наблюдателей о событии.
	notify(): void;

	state: boolean
}

/**
* Издатель владеет некоторым важным состоянием и оповещает наблюдателей о его
* изменениях.
*/
class Button implements Subject {
	/**
	 * @type {boolean} Для удобства в этой переменной хранится состояние
	 * Издателя, необходимое всем подписчикам.
	 */

	constructor(state: boolean) {
		this.state = state;
	}

	public state: boolean;

	/**
	 * @type {Observer[]} Список подписчиков.
	 */
	private observers: Observer[] = [];

	/**
	 * Методы управления подпиской.
	 */
	public subscribe(observer: Observer): void {
		const isExist = this.observers.includes(observer);

		if (isExist) {
			return console.log('Subject: Observer has been subscribed already.');
		}

		console.log('Subject: Subscribed an observer.');

		this.observers.push(observer);
	}

	public unsubscribe(observer: Observer): void {
		const observerIndex = this.observers.indexOf(observer);

		if (observerIndex === -1) {
			return console.log('Subject: Nonexistent observer.');
		}

		this.observers.splice(observerIndex, 1);

		console.log('Subject: Unsubscribed an observer.');
	}

	/**
	 * Запуск обновления в каждом подписчике.
	 */
	public notify(): void {
		console.log('Subject: Notifying observers...');

		for (const observer of this.observers) {
			observer.update(this);
		}
	}

	/**
	 * Обычно логика подписки – только часть того, что делает Издатель. Издатели
	 * часто содержат некоторую важную бизнес-логику, которая запускает метод
	 * уведомления всякий раз, когда должно произойти что-то важное (или после
	 * этого).
	 */
	public pushButton(): void {
		console.log('Button was pushed.');

		this.state = true;

		setTimeout(() => {
			this.state = false;

			console.log(`Button: My state has just changed to: ${this.state}`);

		}, 1000);

		console.log(`Button: My state has just changed to: ${this.state}`);

		this.notify();
	}
}

/**
* Интерфейс Наблюдателя объявляет метод уведомления, который издатели
* используют для оповещения своих подписчиков.
*/
interface Observer {
	// Получить обновление от субъекта.
	update(subject: Subject): void;

	open(): void;

	close(): void;

	stop(): void;

	inProgress: boolean;

	isOpen: boolean;

	howManyTimeInProgress: number;
}

/**
* Конкретные Наблюдатели реагируют на обновления, выпущенные Издателем, к
* которому они прикреплены.
*/
class Gate implements Observer {
	static readonly fullTime = 10000;

	public inProgress = false;
	public isOpen = false;
	public howManyTimeInProgress = 0;

	static intervalId: any;

	public update({ state }: Subject): void {
		if (state) {
			this.inProgress = true;

			console.log('Gate: Reacted to the event.');

			this.move(Gate.fullTime);
		}

		if (state && this.inProgress) {
			this.stop();
		}
	}

	public stop() {
		this.inProgress = false;

		//TODO остановить движение
	}

	public open() {
		console.log('Gate: I`m opening');

		const delay = Gate.fullTime - this.howManyTimeInProgress;

		this.move(delay);

		setTimeout(() => {
			this.inProgress = false;
			this.isOpen = true;
			this.howManyTimeInProgress = 0;

			console.log('Gate: I`ve just opened.');
		}, delay);

	}

	public close() {
		console.log('Gate: I`m closing');

		const delay = Gate.fullTime - this.howManyTimeInProgress;

		this.move(delay);

		setTimeout(() => {
			this.inProgress = false;
			this.isOpen = false;
			this.howManyTimeInProgress = 0;

			console.log('Gate: I`ve just closed.');
		}, delay);
	}

	public move(delay: number) {
		console.log(delay);
		// TODO 
		Gate.intervalId = setInterval(() => {
			this.howManyTimeInProgress += 1;
			this.howManyTimeInProgress === 10 && clearInterval(Gate.intervalId);
		}, 1000);

		// setTimeout(() => {
		// 	clearInterval(Gate.intervalId);
		// }, delay);
	}
}

/**
* Клиентский код.
*/
// }

const button = new Button(false);

const gate = new Gate();
button.subscribe(gate);
button.subscribe(gate);

button.pushButton();
gate.open()

// button.unsubscribe(gate);
