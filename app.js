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