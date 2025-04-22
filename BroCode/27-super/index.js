class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    constructor(name, age, cgpa){
        super(name, age);
        this.cgpa = cgpa;
    }
}

student = new Student("Mueid", 30, 3.33);
console.log(`${student.name}, ${student.age}, ${student.cgpa}`);