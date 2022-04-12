/* SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/


// Creo i due array da fondere
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8]; 
let arrayWords = ['a', 'b', 'c', 'd','e','f','g','h']; 
    
 
// Creo la funzione per fonderli
 function arrayMerged(array_1, array_2) {
    let arrayFusion = [];
    for (let i = 0; i < array_1.length; i++) {
      arrayFusion.push(array_1[i]);
      arrayFusion.push(array_2[i]);
    }
    return arrayFusion;
} 


// Invoco la funzione con gli argomenti per i parametri
let arrayFusion = arrayMerged(arrayNumbers, arrayWords);
console.log("Primo array:", arrayNumbers);
console.log("Secondo array:", arrayWords);
console.log("Array fusione:", arrayFusion);


/* Soluzione Fabio con il forEach Correzione Fabio in Live */

// definire primo array

// definire secondo array

// ciclare nel primo array

// pushare l'elemento in un nuovo array

// selezionare elemento dalla seconda array

// pusharlo nella nuova array

function mergeArrays(array_1, array_2) {
    const newArray = [];
    if(array_1.length === array_2.length) {

        array_1.forEach((element, index) => {
            newArray.push(element);
            newArray.push(array_2[index]);
        })
        return newArray
    }
    
}

console.log(mergeArrays(['a','b','c'], [1, 2, 3]));