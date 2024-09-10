// Constructor function for Book
function Book(title, author, isAvailable) {
    this.title = title;          // Title of the book
    this.author = author;        // Author of the book
    this.isAvailable = isAvailable; // Availability status

    // Method to toggle the availability status
    this.toggleAvailability = function() {
        this.isAvailable = !this.isAvailable; // Switches true to false, and vice versa
        console.log(`Availability status of "${this.title}" changed to: ${this.isAvailable ? "Available" : "Checked out"}`);
    };
}

// Creating instances of Book
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", false);

// Display initial status
console.log(`${book1.title} by ${book1.author} is ${book1.isAvailable ? "available" : "checked out"}.`);
console.log(`${book2.title} by ${book2.author} is ${book2.isAvailable ? "available" : "checked out"}.`);

// Toggle availability status
book1.toggleAvailability();
book2.toggleAvailability();

// Display updated status
console.log(`${book1.title} by ${book1.author} is now ${book1.isAvailable ? "available" : "checked out"}.`);
console.log(`${book2.title} by ${book2.author} is now ${book2.isAvailable ? "available" : "checked out"}.`);




class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Corolla");
