
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
let year = new Date().getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// Aussagenlogik
let isJohnOlder = (ageJohn > ageMark);
let isJohnEqual = (ageJohn == ageMark);
console.log("isJohnOlder: " + isJohnOlder)
console.log("isJohnEqual: " + isJohnEqual)

