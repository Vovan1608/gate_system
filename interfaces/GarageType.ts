export default interface GarageType {
	toggleGate(): void;

	updateCarState(subject: boolean): void;

	setTimer(value: number): void;
}