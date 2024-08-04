
//Type: Flexible label for defining object shapes and more (like a versatile 
// tag you can stick on different things).


// Define the Car type as a flexible label
type Car = {
    make: string;
    model: string;
    year: number;
    describe(): void;
  };
  
  // Create objects that implement the Car type
  const car1: Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    describe() {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  };
  
  const car2: Car = {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    describe() {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  };
  
  const car3: Car = {
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
  