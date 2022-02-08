interface GarageType {
	updateCarState(subject: boolean): void;

	gateInstance(): any
}

interface CarType {
	nearby: boolean;

	attach(observer: GarageType): void;

	notify(): void;
}

interface GateType {
	closed: boolean;
	closingLevel: number;
	timerState: number;
	speedState: number;
	gatePending: boolean;
}

export { CarType, GarageType, GateType };