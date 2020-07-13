const sum = (a, b) => a + b;

function objectLength(obj) {
    let counter = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            counter++;
        };
    };

    return counter;
};

const anotherCar = {
    type: 'Nissan',
    color: 'Silver',
    class: 'D',
    year: 2002,
    fuel: 'petrol',
    model: 'Primera',
}

console.log(objectLength(anotherCar));



function copy(obj) {
    let clone = {};

    for (const key in obj) {
            const element = obj[key];
            clone[key] = element;
    }

    return clone;
}

const car = {
    a: { type: 'Nissan' },
    color: 'Silver',
    class: 'D',
    year: 2002,
    fuel: 'petrol',
    model: 'Primera',
}

let result = copy(car);
console.log(result);
console.log(car.a === result.a);



const cave = {
    a: {
        a: 1,
        b: false,
    },
    b: {
        a: false,
        b: false,
    },
};

const newCave = copy(cave);
cave.a.a = 'abc';
console.log(newCave.a === cave.a);
console.log(newCave.a.a === cave.a.a);

function deepCopy(obj) {
    let clone = {};

    for (const key in obj) {
            const element = obj[key];
            if(element !== null && typeof element === 'object'){
                clone[key] = deepCopy(element);
            } else {
                clone[key] = element;
            }
            
    }

    return clone;
} 