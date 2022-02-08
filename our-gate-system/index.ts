import Garage from './clases/Garage';
import Car from './clases/Car';
import RemoteControl from './clases/RemoteControl';
import User from './clases/User';

const tom = new User('Tom');
const bob = new User('Bob');

const car = new Car();
const garage = new Garage(car);
const remoteControl = new RemoteControl(garage);

garage.attach(tom);
garage.attach(bob);

car.attach(garage);

remoteControl.setTimer(3);
remoteControl.setClosingSpeed(5);

// garage.toggleGate();

car.carIsComing(true)

setTimeout(() => car.carIsComing(false), 5000);

// setTimeout(() => car.carIsComing(false), 10000);
