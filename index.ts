import Garage from './clases/Garage';
import Car from './clases/Car';

const garage = new Garage();
const car = new Car();
car.attach(garage);

garage.setTimer(3);
garage.setClosingSpeed(5);

garage.toggleGate();

// setTimeout(() => garage.toggleGate(), 4000);
// setTimeout(() => garage.toggleGate(), 5000);
setTimeout(() => car.carIsComing(), 13000);
