interface Vehicle {
  name: string;
  year: number;
  color: string;
}

// se voglio che il mio oggetto rispetti un'interfaccia,
// devo esplicitarla con l'annotazione del tipo
const oldCivic: Vehicle = {
  name: "civic",
  year: 2000,
  color: "black",
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Color: ${vehicle.color}`);
};

printVehicle(oldCivic);
