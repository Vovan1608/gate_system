import Garage from './clases/Garage';
import Car from './clases/Car';
import Notification from "./clases/Notification";

const garage = new Garage();
const car = new Car();
const notification = new Notification();

car.attach(garage);
car.attach(notification);

garage.setTimer(3);
garage.setClosingSpeed(5);

car.carIsComing(true);

setTimeout(() => car.carIsComing(false), 7000);
// garage.toggleGate();

// setTimeout(() => garage.toggleGate(), 4000);
// setTimeout(() => garage.toggleGate(), 5000);
// setTimeout(() => car.carIsComing(), 13000);
// setTimeout(() => car.carIsComing(), 15000);