class User {
    static userCount = 0;

    constructor(name) {
        this.name = name;
        User.userCount++;
    }

    displayName() {
        console.log(`Hello, ${this.name}`);
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online...`);
    }
}

user = new User("Mueid");
user2 = new User("Rasel");

user.displayName();
User.getUserCount();