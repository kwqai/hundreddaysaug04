"use strict";
// Interface: Contract that defines the structure of an object 
// (like a recipe listing ingredients).
// Create objects that implement the Car interface
const car1 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    describe() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
};
const car2 = {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    describe() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
};
const car3 = {
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    describe() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
};
// Call the describe method on each object
car1.describe(); // This will print: This car is a 2020 Toyota Camry.
car2.describe(); // This will print: This car is a 2019 Honda Civic.
car3.describe(); // This will print: This car is a 2021 Ford Mustang.
