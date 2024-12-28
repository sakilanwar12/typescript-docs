class AbstractVehicle {
    constructor() {
      if (new.target === AbstractVehicle) {
        throw new Error("Cannot instantiate an abstract class directly.");
      }
    }
  
    startEngine() {
      throw new Error("Method 'startEngine()' must be implemented.");
    }
  
    stopEngine() {
      throw new Error("Method 'stopEngine()' must be implemented.");
    }
  }
  
  class Car extends AbstractVehicle {
    startEngine() {
      console.log("Car engine started.");
    }
  
    stopEngine() {
      console.log("Car engine stopped.");
    }
  }
  
  class Bike extends AbstractVehicle {
    startEngine() {
      console.log("Bike engine started.");
    }
  
    stopEngine() {
      console.log("Bike engine stopped.");
    }
  }
  
  // Example Usage
  const myCar = new Car();
  myCar.startEngine(); 
  myCar.stopEngine(); 
  
  const myBike = new Bike();
  myBike.startEngine(); 
  myBike.stopEngine();  
  
