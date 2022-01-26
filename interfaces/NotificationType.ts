export default interface NotificationType {
	generateNotification: string;

	subscribe(observer: object): void;

	unsubscribe(observer: object): void;

	alert(): void;
}