type Point = {
    x: number;
    y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;
function distance(
    a1: number | Point,
    a2: number | Point,
    a3?: number,
    a4?: number
): number {
    if (
        typeof a1 === 'object' &&
        typeof a2 === 'object' &&
        a3 === undefined &&
        a4 === undefined
    ) {
        return Math.sqrt(
            ((a2 as Point).x - (a1 as Point).x) ** 2 +
                ((a2 as Point).y - (a1 as Point).y) ** 2
        );
    } else if (
        typeof a1 === 'number' &&
        typeof a2 === 'number' &&
        typeof a3 === 'number' &&
        typeof a4 === 'number'
    ) {
        return Math.sqrt((a3 - a1) ** 2 + (a4 - a2) ** 2);
    } else {
        throw new Error('Invalid arguments');
    }
}

const point1: Point = { x: 10, y: 20 };
const point2: Point = { x: 20, y: 30 };

console.log(distance(10, 20, 20, 30));
console.log(distance(point1, point2));
