import Garage from './clases/Garage';
import Car from './clases/Car';

const garage = new Garage();
const car = new Car();
car.attach(garage);

garage.toggleGate();

garage.setTimer(5000);

// setTimeout(() => garage.toggleGate(), 4000);
// setTimeout(() => garage.toggleGate(), 5000);
// setTimeout(() => car.carIsComing(), 9000);
