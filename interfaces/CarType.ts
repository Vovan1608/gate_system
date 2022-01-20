import GarageType from '../interfaces/GarageType';

export default interface CarType {
	nearby: boolean;

	attach(observer: GarageType): void;

	notify(): void;
}