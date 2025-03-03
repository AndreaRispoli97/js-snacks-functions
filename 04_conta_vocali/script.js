/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// function howManyVocals(word) {
//     const vocals = ['a', 'e', 'i', 'o', 'u'];
//     let vocalsCount = 0;
//     word = word.toLowerCase();
//     for (let i = 0; i < word.length; i++) {
//         if (vocals.includes(word[i])) {
//             vocalsCount++;
//         }
//     }
//     return vocalsCount;
// }


function howManyVocals(word) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let vocalsCount = 0;
    word = word.toLowerCase();
    let foundVocals = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            vocalsCount++;
            foundVocals.push(word[i]);
        }
    }
    return (vocalsCount, foundVocals);
}

// const howManyVocals = word => {
//     const vocals = ['a', 'e', 'i', 'o', 'u'];
//     let vocalsCount = 0;
//     word = word.toLowerCase();
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
//             vocalsCount++;
//         }
//     }
//     return vocalsCount;
// }


// Invoca la funzione qui e stampa il risultato in console

console.log(howManyVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)