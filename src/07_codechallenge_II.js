/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

let name = prompt("Name: ");
let alter = prompt("Alter: ")

if(alter > 0 && alter < 6){
    console.log(name + " trinkt Milch" );
} else if(alter >= 6 && alter < 13){
    console.log(name + " trinkt Saft");
} else if(alter >= 13 && alter < 18){
    console.log(name + " trinkt Cola");
} else if (alter >= 18){
    console.log(name + " trinkt Wein");
}
