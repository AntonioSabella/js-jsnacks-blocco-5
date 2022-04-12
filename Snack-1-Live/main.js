/* Crea un array di 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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


// calcolare quanto pesano tutte le zucchine

let pesoTotZucchine = 0;
arrayZucchine.forEach(zucchina => {
    console.log(zucchina.peso);
    let pesoZucchina = zucchina.peso;
    pesoTotZucchine += pesoZucchina; // forma contratta
    // forma estesa: pesoTotZucchine = pesoTotZucchine + pesoZucchina;
});

console.log(`Peso totale zucchine: ${pesoTotZucchine}`);
