/**
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками.
 */
interface Subject {
	// Присоединяет наблюдателя к издателю.
	attach(observer: Observer): void;

	// Отсоединяет наблюдателя от издателя.
	detach(observer: Observer): void;

	// Уведомляет всех наблюдателей о событии.
	notify(): void;

	state: number
}

/**
* Издатель владеет некоторым важным состоянием и оповещает наблюдателей о его
* изменениях.
*/
class Button implements Subject {
	/**
	 * @type {number} Для удобства в этой переменной хранится состояние
	 * Издателя, необходимое всем подписчикам.
	 */
	constructor(state: number) {
		this.state = state;
	}

	public state: number;

	/**
	 * @type {Observer[]} Список подписчиков. В реальной жизни список
	 * подписчиков может храниться в более подробном виде (классифицируется по
	 * типу события и т.д.)
	 */
	private observers: Observer[] = [];

	/**
	 * Методы управления подпиской.
	 */
	public attach(observer: Observer): void {
		const isExist = this.observers.includes(observer);

		if (isExist) {
			return console.log('Subject: Observer has been attached already.');
		}

		console.log('Subject: Attached an observer.');

		this.observers.push(observer);
	}

	public detach(observer: Observer): void {
		const observerIndex = this.observers.indexOf(observer);

		if (observerIndex === -1) {
			return console.log('Subject: Nonexistent observer.');
		}

		this.observers.splice(observerIndex, 1);
		console.log('Subject: Detached an observer.');
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
	public push(): void {
		console.log('Pushed.');
		this.state = 1;

		setTimeout(() => {
			this.state = 0;
		}, 100);

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
}

/**
* Конкретные Наблюдатели реагируют на обновления, выпущенные Издателем, к
* которому они прикреплены.
*/
class Gate implements Observer {
	public update(subject: Subject): void {
		if (subject instanceof Button && subject.state === 1) {
			console.log('Gate: Reacted to the event.');
		}
	}
}

/**
* Клиентский код.
*/

const button = new Button(0);

const gate = new Gate();
button.attach(gate);

button.push();
button.push();

button.push();
