/* SNACK 3 
Scrivi una funzione che accetti una stringa come argomento
 e la ritorni girata (es. Ciao -> oaiC)
 */

   let reverseWord = prompt("Scrivi una parola:");

    
    function reverseString(stringa) {

        return stringa.split('').reverse().join('');

    }

    console.log(`Il contrario della tua parola è: ${reverseString(reverseWord)}`);

