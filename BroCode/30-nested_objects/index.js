// example 1

const person = {
    name: "Mueid",
    age: 30,
    address: {
        street: "Ramarbag Main Road",
        city: "Narayanganj",
        country: "Bangladesh"
    }
}

console.log(person.address.street);

for(const property in person.address) {
    console.log(person.address[property]);
}

// example 2

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Mueid", 30, "Ramarbag Main Road", 
                                        "Narayanganj", 
                                        "Bangladesh");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);