person = {
    firstName: "Abu Al",
    lastName: "Mueid",
    age: 30,
    sleep: function() { console.log("I sleep at night at 1 am.") },
    eat: () => console.log("I'm eating burger...")
};

console.log(`${person.firstName} ${person.lastName}, ${person.age}`);
person.sleep();
person.eat();