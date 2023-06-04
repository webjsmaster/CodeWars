const Cat = (function () { 
    let count = 0; 
    let sum = 0;
    function cat(name, weight) {
        if (!name || !weight) {
            throw 'error';
        }
        let w = weight;
        sum += w;
        count++;
        Object.defineProperty(this, 'weight', {
            get: function () {
                return w;
            },
            set: function (value) {
                sum += value - w;
                w = value;
            }
        })
    }
    cat.averageWeight = function () {
        return sum / count;
    }
    return cat;
}());

const garfield = new Cat('garfield', 25)

const felix = new Cat('felix', 15)

console.log('🌻:', Cat.averageWeight())

