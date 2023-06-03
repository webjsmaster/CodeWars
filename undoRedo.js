function undoRedo(object) {

    let lastActions = [];
    let undoneActions = [];

	return {
		set: function(key, value) {
            if (object.hasOwnProperty(key) === true) {
                lastActions.push(['edit', key, object[key], value])
            } else {
                lastActions.push(['set', key, value])
            }
            object[key] = value
            undoneActions = []
        },
		get: function(key) {
            return object[key];
        },
		del: function(key) {
            if (object[key]){
                lastActions.push(['delete', key, object[key]]);
                delete object[key]
                undoneActions = []
            }
        },
		undo: function() {
            if (lastActions.length === 0){
                throw new Error('No actions')
            }

            const pop = lastActions.pop()

            if (pop[0] === 'set') {
                delete object[pop[1]]
            } else if (pop[0] === 'edit') {
                object[pop[1]] = pop[2]
            } else if (pop[0] === 'delete') {
                object[pop[1]] = pop[2]
            }

            undoneActions.push(pop)
        },
		redo: function() {
            if (undoneActions.length === 0) {
                throw new Error('No actions')
            }

            const pop = undoneActions.pop()
            
            if (pop[0] === 'set') {
                object[pop[1]] = pop[2]
            } else if (pop[0] === 'edit') {
                object[pop[1]] = pop[3]
            } else if (pop[0] === 'delete') {
                delete object[pop[1]]
            }

            lastActions.push(pop)
        }
	};
}


undoRedo([{}]).set('a', '1')

// console.log('📢 [undoRedo.js:18]', undoRedo([{"x": 12}, { "y": 2 }]).get("x") );
undoRedo([{"x": 12}, { "y": 2 }]).del("x")

console.log('📢 [undoRedo.js:69]', console.log('📢 [undoRedo.js:18]', undoRedo([{"x": 12}, { "y": 2 }]).del("x") ););
