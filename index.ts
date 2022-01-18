import Garage from './clases/Garage';

const garage = new Garage();

garage.toggleGate()

setTimeout(() => garage.toggleGate(), 4000);
setTimeout(() => garage.toggleGate(), 5000);
