interface Listener {
	getState(): ListenerState
	subscribe(observer: Observer): void
	unsubscribe(observer: Observer): void
	notify(): void
}

interface Observer {
	update(eventListener: Listener): void
	__proto__?: any
}

interface ListenerState {
	data: User[]
	readonly error: Error
}

interface User {
	readonly name: string
	readonly age: number
}

class AppListener implements Listener {
	private state: ListenerState = { data: [], error: new Error }

	private observers: Observer[] = []

	getState(): ListenerState {
		return this.state;
	}

	subscribe(observer: Observer): void {
		const className = observer.__proto__.constructor.name;

		const isExist = this.observers.includes(observer);

		if (isExist) {
			return console.log(`Observer ${className} is already subscribed!`);
		}

		this.observers.unshift(observer);

		console.log(`Observer ${className} was added!`);
	}

	unsubscribe(observer: Observer): void {
		const className = observer.__proto__.constructor.name;

		const observerIdx = this.observers.indexOf(observer);

		if (observerIdx > -1) {
			this.observers.splice(observerIdx, 1);
		} else {
			console.log(`Observer ${className} isn't in collection`);

		}
	}

	notify(): void {
		for (const observer of this.observers) {
			observer.update(this);
		}
	}

	getUsers(): void {
		setTimeout(() => {
			this.state.data = [
				{
					name: 'Vova',
					age: 40
				},
				{
					name: 'Lesha',
					age: 38
				},
				{
					name: 'Lena',
					age: 35
				},
				{
					name: 'Serrgii',
					age: 43
				},
				{
					name: 'Nort',
					age: 49
				}
			]
			this.notify();
		}, 1000)
	}
}

class SortObserver implements Observer {
	update(eventListener: Listener): void {
		const { data } = eventListener.getState();
		const sortedUsers = data.sort((a, b) => a.age - b.age)
	}
}

class JSONSerializeObserver implements Observer {
	update(eventListener: Listener): void {
		const { data } = eventListener.getState();
		console.log(JSON.stringify(data));
	}
}

// Client
const appListener = new AppListener();

const sortObserver = new SortObserver();
const serialized = new JSONSerializeObserver();

[sortObserver, serialized].forEach((el) => {
	appListener.subscribe(el);
});

appListener.getUsers();
