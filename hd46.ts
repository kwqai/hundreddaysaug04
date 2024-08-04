/*
Enhanced Laptop Object: Construct an object for a laptop 
including properties make, model, year, 
and a method describe() that logs a sentence about the laptop.


let laptop = {
  make: "Dell",
  model: "New Elite Series",
  year: 2024,
  describe: function () {
console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

laptop.describe();

const laptopa= {
    make: "Dell",
    model: "New Elite Series",
    year: 2014,
    describe: function () {
  console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  
  laptopa.describe();

  var laptopb = {
    make: "Dell",
    model: "New Elite Series",
    year: 2025,
    describe: function () {
  console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  
  laptopb.describe();

  class Laptop3 {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    describe(): string {
      return `This laptop is a ${this.year} ${this.make} ${this.model}.`;
    }
  }
  
  const laptop3 = new Laptop3("Dell", "New Elite Series", 2010);
  const description = laptop3.describe();
  
  console.log(description);
  
              
interface Laptop {
    make: string;
    model: string;
    year: number;
    describe(): void;
  }
  
  const laptopnew: Laptop = {
    make: "Dell",
    model: "New Elite Series",
    year: 2050,
    describe() {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  
  laptopnew.describe();
  
  type Laptop1 = {
    make: string;
    model: string;
    year: number;
    describe(): void;
  }
  
  const laptop1: Laptop1 = {
    make: "Dell",
    model: "New Elite Series",
    year: 2040,
    describe() {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  
  laptop1.describe();

  class Laptop2 {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    describe(): void {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
  }
  
  const laptop2 = new Laptop2("Dell", "New Elite Series", 2030);
  
  laptop2.describe();
  
  */

//  =======================================================================

/*

let laptop = {
//const laptopa= {   
//var laptopb = {
    make: "Dell",
    model: "New Elite Series",
    year: 2024, 
    describe: function () {
  console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  
  laptop.describe();
  
    class Laptop3 {
      make: string;
      model: string;
      year: number;
    
      constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    
      describe(): string {
        return `This laptop is a ${this.year} ${this.make} ${this.model}.`;
      }
    }

    // using void
        
    /*
      describe(): void {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }

    const laptop2 = new Laptop2("Dell", "New Elite Series", 2030);
    laptop2.describe();
    */


  /*
    
    const laptop3 = new Laptop3("Dell", "New Elite Series", 2010);
    const description = laptop3.describe();
    
    
    console.log(description);
  */

  // ========== BY USING RETURN METHOD  ==================================
// Correcting the interface definition for Laptop

/*

interface Laptop {
  make: string;
  model: string;
  year: number;
  describe(): void;
}

// Correcting the object definition that implements the Laptop interface
const laptopnew: Laptop = {
  make: "Dell",
  model: "khalid valee kwqSeries",
  year: 2050,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

laptopnew.describe(); // This will print: This laptop is a 2050 Dell New Elite Series.

// Standalone describe method, if needed outside of the object
function describe(): string {
  return `This laptop is a ${this.year} ${this.make} ${this.model}.`;
}
  
*/

//======== ADDING MORE RECORDS ==========================

// Define the Laptop interface
interface Laptop {
  make: string;
  model: string;
  year: number;
  describe(): void;
}

// Correcting the object definition that implements the Laptop interface
const laptop1: Laptop = {
  make: "Dell",
  model: "khalid valee kwqSeries",
  year: 2050,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

const laptop2: Laptop = {
  make: "Apple",
  model: "MacBook Pro",
  year: 2023,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

const laptop3: Laptop = {
  make: "HP",
  model: "Spectre x360",
  year: 2024,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

const laptop4: Laptop = {
  make: "Lenovo",
  model: "ThinkPad X1 Carbon",
  year: 2022,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

const laptop5: Laptop = {
  make: "Asus",
  model: "ZenBook Pro",
  year: 2025,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};

// Describe each laptop
laptop1.describe(); // This will print: This laptop is a 2050 Dell khalid valee kwqSeries.
laptop2.describe(); // This will print: This laptop is a 2023 Apple MacBook Pro.
laptop3.describe(); // This will print: This laptop is a 2024 HP Spectre x360.
laptop4.describe(); // This will print: This laptop is a 2022 Lenovo ThinkPad X1 Carbon.
laptop5.describe(); // This will print: This laptop is a 2025 Asus ZenBook Pro.

// Standalone describe method, if needed outside of the object
function describe(laptop: Laptop): string {
  return `This laptop is a ${laptop.year} ${laptop.make} ${laptop.model}.`;
}

// Example usage of the standalone describe method
console.log(describe(laptop1)); // This will print: This laptop is a 2050 Dell khalid valee kwqSeries.
console.log(describe(laptop2)); // This will print: This laptop is a 2023 Apple MacBook Pro.
console.log(describe(laptop3)); // This will print: This laptop is a 2024 HP Spectre x360.
console.log(describe(laptop4)); // This will print: This laptop is a 2022 Lenovo ThinkPad X1 Carbon.
console.log(describe(laptop5)); // This will print: This laptop is a 2025 Asus ZenBook Pro.

//  ============================================================    

/*

introduce(): string {
    return `This is ${this.name}, a ${this.age}-year-old ${this.grade}.`;
  }
  
  */
//==========================================================================

/*

  getDetails(): string {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
  

  printInfo(): void {
    console.log(`Info: ${this.name} is ${this.age} years old.`);
  }

  
  display(): string {
    return `Displaying ${this.name} - Age: ${this.age}, Grade: ${this.grade}`;
  }

  summary(): string {
    return `Summary: ${this.name} is in grade ${this.grade} and is ${this.age} years old.`;
  }

  logStatus(): void {
    console.log(`${this.name} is currently in grade ${this.grade}.`);
  }

  showProfile(): string {
    return `Profile: Name - ${this.name}, Age - ${this.age}, Grade - ${this.grade}`;
  }

  info(): string {
    return `${this.name}, aged ${this.age}, is in grade ${this.grade}.`;
  }
  report(): string {
    return `Report: ${this.name}, Age ${this.age}, is a ${this.grade} student.`;
  }

  class Student {
    name: string;
    age: number;
    grade: string;
  
    constructor(name: string, age: number, grade: string) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  
    introduce(): string {
      return `This is ${this.name}, a ${this.age}-year-old ${this.grade}.`;
    }
  }
  
  const student = new Student("Alice", 20, "Sophomore");
  console.log(student.introduce());
  
*/

//==============  BY USING RETURN METHOD  ====================================

/*

let laptop = {
  //const laptopa= {   
  //var laptopb = {
      make: "Khalid Wali Qurehi info",
      model: "KWQ Summary",
      year: 2042, 
      describe: function () {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
      },
    };
    
    laptop.describe();
       
    class Laptop {
        make: string;
        model: string;
        year: number;
      
        constructor(make: string, model: string, year: number) {
          this.make = make;
          this.model = model;
          this.year = year;
        }
      
        describe(): string {
          return `This laptop is a ${this.year} ${this.make} ${this.model}.`;
        }
      }
  
           
      const laptop3 = new Laptop("Dell", "New Elite Series", 2010);
      const laptop4 = new Laptop("BellY", "New Elite SeriesY", 2010);

      const description3 = laptop3.describe();
      const description4 = laptop4.describe();
      
      
      //console.log(description, description4);
      console.log(description3);
      console.log(description4);

*/

  //  ========  BY USING VOID METHOD ==================================

/*
  // Correcting the object definition for laptop
let laptop = {
  make: "Dell",
  model: "New Elite Series",
  year: 2024,
  describe: function () {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  }
};

laptop.describe(); // This will print: This laptop is a 2024 Dell New Elite Series.

// Correcting the class definition for Laptop3
class Laptop3 {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  describe(): void {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  }
}

// Correcting the instantiation and method call for laptop2
const laptop2 = new Laptop3("Dell", "New Elite Series", 2030);
laptop2.describe(); // This will print: This laptop is a 2030 Dell New Elite Series.

// Correcting the instantiation and method call for laptop3
const laptop3 = new Laptop3("Dell", "New Elite Series", 2010);
laptop3.describe(); // This will print: This laptop is a 2010 Dell New Elite Series.
*/

//========================================================================