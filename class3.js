// methods - functions in class are called methods.when we create a class we can add methods to it
// class person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     getFullName() {
//         console.log("hi",this.firstname);
//     }
// compliment() {
//         console.log("hi",this.firstname);
//     }   

// properties
// class person (
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     ]}
//     getFullName() {
//         console.log("hi",this.#firstname);
//     }

// constructor(firstname, lastname) {
//     if(firstname.startsWith("a")) {
//         this.#firstname = firstname;
//     }else {
//         throw new Error("firstname should start with a")
//     }
//     this.#lastname = lastname;
// }

// getter and setters
// class person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     getFullName() {
//         return `${this.#firstname} ${this.#lastname}`;
//     }
//     set lastname(){
//         return this.#lastname;
//     }
// }

// // inheritance
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log(`The vehicle is moving at ${this.currentSpeed} km/h.`);
//     }
// }
// accelerate(amount)

// // Example usage:
// const car = new Vehicle("red", 50, 200);
// car.move(); // Output: The vehicle is moving at 50 km/h.
 
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }

//     doWheelie() {
//         console.log("The motorcycle is doing a wheelie!");
//     }
// }

// // Example usage:
// const bike = new Motorcycle("black", 80, 150, "petrol");
// bike.move(); // Output: The vehicle is moving at 80 km/h.
// bike.doWheelie(); // Output: The motorcycle is doing a wheelie!

// super word in constructor
// Example of using super in the constructor
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed); // Call the parent class constructor
//         this.fuel = fuel;
//     }

//     doWheelie() {
//         console.log("The motorcycle is doing a wheelie!");
//     }
// }

// // Object creation
// const bike = new Motorcycle("black", 80, 150, "petrol");
// bike.move(); // Output: The vehicle is moving at 80 km/h.
// bike.doWheelie(); // Output: The motorcycle is doing a wheelie!
 
// we cannot access any motorcyles specific properties or methods in our vehicle class.

// prototypes
class person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

// Adding a method to the prototype
person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
};

// Example usage:
const individual = new person("John", "Doe");
console.log(individual.getFullName()); // Output: John Doe
person.prototype.favoriteColor="green";

let p=new person("maria","saga");
console.log(p.favoriteColor);
p.introduce();
