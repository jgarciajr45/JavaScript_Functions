console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        console.log("Oops! number must be positive");
        return;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}//printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = "User", age = 0) {
    const aboveSixteen = `Congrats ${userName}, you can drive!"`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}//checkAge("Jesus", 40)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whatQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log(`(${x}, ${y}) Point origin`);
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    }
    
}
// whatQuadrant(0, 0);
// whatQuadrant(0, 5);
// whatQuadrant(5, 0);
// whatQuadrant(5, 5);
// whatQuadrant(-5, 5);
// whatQuadrant(-5, -5);
// whatQuadrant(5, -5);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return console.log(`(${side1}, ${side2}, ${side3}) Invalid triangle. The sum of 2 sides should always be greater than the 3rd`);
    } else if (side1 === side2 && side2 === side3) {
        return console.log(`(${side1}, ${side2}, ${side3}) Equilateral triangle. All sides are equal.`);
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return console.log(`(${side1}, ${side2}, ${side3}) Isosceles! Only two side lengths are equal.`);
    } else{
        return console.log(`(${side1}, ${side2}, ${side3}) Scalene triangle. All sides are different lengths`);
    }
}
// triangleType(1,1,2);
// triangleType(2,2,2);
// triangleType(4,4,2);
// triangleType(2,3,4);

