"use strict";
function distance(a1, a2, a3, a4) {
    if (typeof a1 === 'object' &&
        typeof a2 === 'object' &&
        a3 === undefined &&
        a4 === undefined) {
        return Math.sqrt(Math.pow((a2.x - a1.x), 2) +
            Math.pow((a2.y - a1.y), 2));
    }
    else if (typeof a1 === 'number' &&
        typeof a2 === 'number' &&
        typeof a3 === 'number' &&
        typeof a4 === 'number') {
        return Math.sqrt(Math.pow((a3 - a1), 2) + Math.pow((a4 - a2), 2));
    }
    else {
        throw new Error('Invalid arguments');
    }
}
var point1 = { x: 10, y: 20 };
var point2 = { x: 20, y: 30 };
console.log(distance(10, 20, 20, 30));
console.log(distance(point1, point2));
