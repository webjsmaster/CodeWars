

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
            funFact: 'I like fishing.'
            }
        },
    }
};

Object.prototype.hash = function(string) {
    const arr = string.split('.');
    return arr.reduce(function(obj, key){ 
        return (obj) ? obj[key] : obj; 
    }, this); 
}

 console.log('🍄:', obj.hash('person.name')); // 'joe'
 console.log('🍄:', obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
//   obj.hash('person.history.homeStreet'); // undefined
//   obj.hash('person.animal.pet.needNoseAntEater'); // undefined