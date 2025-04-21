function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {console.log(`I'm driving ${this.make} ${this.model}`)}
}

car1 = new Car("Tesla", "WXYZ", 2025, "red");
car1.drive();

