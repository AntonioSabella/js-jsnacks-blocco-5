/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const arrayZucchine = [
    {
        varieta: 'faenza',
        peso: 100,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 18
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 100,
        lunghezza: 16
    },
    {
        varieta: 'faenza',
        peso: 60,
        lunghezza: 27
    },
    {
        varieta: 'faenza',
        peso: 45,
        lunghezza: 9
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 12
    },
    {
        varieta: 'faenza',
        peso: 100,
        lunghezza: 17
    },
    {
        varieta: 'faenza',
        peso: 200,
        lunghezza: 24
    },
    {
        varieta: 'faenza',
        peso: 50,
        lunghezza: 11
    }
]


const zucchinePiccole = arrayZucchine.filter((zucchina) => zucchina.lunghezza < 15);
console.log(zucchinePiccole);

const zucchineGrandi = arrayZucchine.filter((zucchina) => zucchina.lunghezza > 15);
console.log(zucchineGrandi);

let pesoZucchineGrandi = 0;
zucchineGrandi.forEach((zucchina) => {
    console.log(zucchina.peso);
    pesoZucchineGrandi += zucchina.peso; 
});

console.log(`Peso totale zucchine grandi: ${pesoZucchineGrandi}`);

let pesoZucchinePiccole = 0;
zucchinePiccole.forEach(zucchina => {
    console.log(zucchina.peso);
    pesoZucchinePiccole += zucchina.peso; 
});

console.log(`Peso totale zucchine piccole: ${pesoZucchinePiccole}`);


