/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function getLetterNames(names, letter) {
    const namesWithLetter = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === letter) {
            namesWithLetter.push(names[i]);
        }
    }
    return namesWithLetter;
}

// const getLetterNames = (names, letter) => {
//     const namesWithLetter = [];
//     for (let i = 0; i < names.length; i++) {
//         if (names[i][0] === letter) {
//             namesWithLetter.push(names[i]);
//         }
//     }
//     return namesWithLetter;
// }

// Invoca la funzione qui e stampa il risultato in console


console.log(getLetterNames(names, "A"));

console.log(getLetterNames(names, "M"));

console.log(getLetterNames(names, "L"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]