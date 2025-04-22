class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(name) {
        if(typeof name === "string"){
            this._name = name;
        }
    }

    set age(age) {
        if(typeof age === "number"){
            this._age = age;
        }
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Mueid", 30);
console.log(person.name);
console.log(person.age);