class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
};
class Cat extends Pet {
    meow() {
        console.log(`${this.name} is meowing`);
    }
};