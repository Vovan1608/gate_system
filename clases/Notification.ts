import NotificationType from "../interfaces/NotificationType";

export default class Notification implements NotificationType {
	private text: string;
	private observers: any[];

	get generateNotification(): string {
		return this.text;
	};

	set generateNotification(value: string) {
		this.text = value;
	}

	subscribe(observer: object): void {
		const isExist = this.observers.includes(observer);

		if (isExist) {
			return console.log(`${observer} has been subscribed already.`);
		}

		console.log(`${observer} subscribed an observer.`);
		this.observers.push(observer);
	};

	unsubscribe(observer: []): void {
		const observerIndex = this.observers.indexOf(observer);

		if (observerIndex === -1) {
			return console.log(`${observer} nonexistent observer.`);
		}

		this.observers.splice(observerIndex, 1);
		console.log(`${observer} unsubscribed an observer.`);
	};

	alert(): void {
		for (const observer of this.observers) {
			observer.update(this);
		}
	};

	public generateMessage(message: string): void {
		this.generateNotification = `I do ${message}`;

		console.log(this.generateNotification);
		this.alert();
	};
}