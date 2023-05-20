//write a constructor function called Car, that creates a new object, with the properties: make, model, and year.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
//add a method called getDescription to the Car prototype, which returns a string containing information about the car.
    getDescription() {
        return this.make + ' ' + this.model + ' ' + this.year;
    }
};
const myCar = new Car();
console.log(myCar.getDescription());
//Define the ElectricCar function as a subclass of Car. Add an extra property called range, that represents the range of the electric car in miles.
class ElectricCar extends Car {
    
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    
    }
    getDescription() {
        return this.make + ' ' + this.model + ' ' + this.year + ' ' + this.range;
    };
    
};
const econCar = new ElectricCar("Tesla", "Model S", 2019, 300);
//Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.
   
console.log(econCar.getDescription());
//done
