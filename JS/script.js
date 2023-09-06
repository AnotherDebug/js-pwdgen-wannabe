/*
             Password generator
   ========================================          

1. Salvare nelle variabili il prompt del nome, cognome e colore preferito;

2. Salvare il messaggio in una variabile;

3. Stampare sulla pagina il valore della variabile del messaggio.

*/





// 1.
const firstName = prompt('Inserisci il tuo Nome');


const lastName = prompt('Inserisci il tuo Cognome');


const favColor = prompt('Inserisci il tuo colore preferito');


// 2.

const message = firstName + lastName + favColor + '23';

const messagestr = document.getElementById('output');


// 3.

messagestr.innerHTML = message.toLowerCase(message);