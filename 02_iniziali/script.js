/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// function getFirstLetter(names) {
//     return names.map(name => name[0]);
// }

// console.log(getFirstLetter(names));

function getFirstLetter(names) {
    const namesInitials = [];
    for (let i = 0; i < names.length; i++) {
        namesInitials.push(names[i][0]);
    }
    return namesInitials;
}

// const getFirstLetter = names => {
//     const namesInitials = [];
//     for (let i = 0; i < names.length; i++) {
//         namesInitials.push(names[i][0]);
//     }
//     return namesInitials;
// }


// Invoca la funzione qui e stampa il risultato in console

console.log(getFirstLetter(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]