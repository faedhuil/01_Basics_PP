
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/

const prompt = require('prompt-sync')({sigint: true});

var food;
var drink;

console.log("Guten Tag bei MD, Ihre Bestellung bitte!")

let auswahlFood = parseInt(prompt("Hamburger (1), Cheeseburger (2)oder Chilliburger (3) ? "));

switch (auswahlFood) {
    case 1:
        food = "Hamburger";  
        break;
    case 2:
        food = "Cheeseburger";
        break;
    case 3:
        food = "Chilliburger";
        break;
    default:
        break;
}

willGetraenk =  prompt("Möchten Sie ein Getränk dazu bestellen? (j/n) ");

if(willGetraenk == "j" || willGetraenk == "J"){
    let auswahlDrink = parseInt(prompt("Cola (1) , Fanta (2), Sprite (3)? "));
    switch (auswahlDrink) {
        case 1:
            drink = "Cola";
            break;
        case 2:
            drink = "Fanta";
            break;
        case 3:
            drink = "Sprite";
            break;
        default:
            break;
    }
    console.log("Hier ist Ihre Bestellung: " + food + " und " + drink);
} else {
    console.log("Hier ist Ihre Bestellung: " + food);
} 