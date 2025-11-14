

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
   
    let sentence = "";

    for(i=0; i < arr.length; i++){
        
        sentence += arr[i];

        if(i < arr.length - 1){
            sentence += " ";
        }
    }

    switch (op) {
        case "S":
            return sentence + ".";
        
        case "Q":
            return sentence + "?";

        case "E":
            return sentence + "!";
        default:
            throw new Error("invalid argument: " + op);
            
    }


}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}