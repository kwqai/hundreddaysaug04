"use strict";
/*
// Class: Blueprint for creating objects (like making multiple cars
// from one design).


// Define the Car class as a blueprint
class Car {
    // Properties of the class
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize the properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method to describe the car
    describe() {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  }
  
  // Create instances of the Car class
  const car1 = new Car('Toyota', 'Camry', 2020);
  const car2 = new Car('Honda', 'Civic', 2019);
  const car3 = new Car('Ford', 'Mustang', 2021);
  
  // Call the describe method on each instance
  car1.describe(); // This will print: This car is a 2020 Toyota Camry.
  car2.describe(); // This will print: This car is a 2019 Honda Civic.
  car3.describe(); // This will print: This car is a 2021 Ford Mustang.
  
  */
class Car {
    // Constructor to initialize the properties
    constructor(make, model, year, name, age, hobbies) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Method to describe the car and the person
    describe() {
        console.log(`My name is ${this.name}, my age is ${this.age}, my hobbies are ${this.hobbies.join(', ')}. This car is my ${this.year} ${this.make} ${this.model}.`);
    }
}
// Create instances of the Car class
const car1 = new Car('Toyota', 'Camry', 2020, 'John', 30, ['reading', 'traveling']);
const car2 = new Car('Honda', 'Civic', 2019, 'Alice', 25, ['painting', 'cycling']);
const car3 = new Car('Ford', 'Mustang', 2021, 'Bob', 35, ['hiking', 'photography']);
// Call the describe method on each instance
car1.describe(); // This will print: My name is John, my age is 30, my hobbies are reading, traveling. This car is my 2020 Toyota Camry.
car2.describe(); // This will print: My name is Alice, my age is 25, my hobbies are painting, cycling. This car is my 2019 Honda Civic.
car3.describe(); // This will print: My name is Bob, my age is 35, my hobbies are hiking, photography. This car is my 2021 Ford Mustang.
