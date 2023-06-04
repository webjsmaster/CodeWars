class Animal {
    /**
     * @param {*} name 
     * @param {*} age 
     * @param {number} legs 
     * @param {*} species 
     * @param {*} status 
     */
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status, legs = 0, species='shark') {
        super(name, age, legs, species, status);
    }
}

class Cat extends Animal {
    constructor(name, age, status, legs = 4, species='cat') {
        super(name, age, legs, species, status);
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
}

class Dog extends Animal {
    constructor(name, age, status, master, legs = 4, species='dog') {
        super(name, age, legs, species, status);
        this.master = master
    }
    greetMaster() {
        return `Hello ${this.master}`
    }
}

console.log('🧬:', new Shark('1', '2', '3'))

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!";

console.log('🌻:', example.introduce())

var dog = new Dog("Drushok", 10, "Happy", "Yuranius");
console.log('🍄:', dog.greetMaster());