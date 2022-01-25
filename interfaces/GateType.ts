export default interface GateType {
	closed: boolean;
	closingLevel: number;
	timerState: number;
	speedState: number;

	subscribe(observer: object): void;

	unsubscribe(observer: object): void;

	alert(): void;
}
