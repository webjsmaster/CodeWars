class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}


Object.defineProperties(Person.prototype, {
    name: {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(v) {
            this.firstName = v.split(' ')[0]
            this.lastName = v.split(' ')[1]
        }
    }
});








let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'