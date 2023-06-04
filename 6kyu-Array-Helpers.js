Array.prototype.square = function () {
    return this.map(el => el * el)
}

Array.prototype.cube = function() {
    return this.map(el => el * el * el)
}

Array.prototype.average = function() {
    if (this) {
        return this.reduce((acc, el, index , arr) => {
            acc += el
            return acc 
        }, 0) / this.length
    } else {
        return NaN
    }
}

Array.prototype.sum = function() {
    return this.reduce((acc, el) => {
        acc += el
        return acc 
    }, 0)
}

Array.prototype.even = function() {
    return this.filter( el => !Math.floor(el % 2))
}

Array.prototype.odd = function() {
    return this.filter( el => Math.floor(el % 2))
}





var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube());    // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum());     // must return 15
console.log(numbers.even());    // must return [2, 4]
console.log(numbers.odd());     // must return [1, 3, 5]

