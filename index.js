// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 2 
let  secondCard = 11

let sum = firstCard + secondCard
console.log(sum);


if (sum < 21) {
    console.log("not far away ");
}else if (sum === 21) {
    console.log("winnner");
}else if (sum > 21) {
    console.log("loser  ");
}


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"


if (age < 21) {
    console.log("not welcomen");
} else {
    console.log(" welcomen");
    
}

console.log(age);