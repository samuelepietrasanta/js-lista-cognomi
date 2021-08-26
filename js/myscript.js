let cognomi = ["Bianchi " , "Neri " , "Rossi " , "Verdi " , "Gialli "];


let cognomeUtente = prompt ("Inserisci il tuo cognome");

cognomi.push(cognomeUtente);


document.write("La lista attuale dei cognomi in ordine alfabetico è la seguente : " + cognomi.sort() + " e la posizione del tuo cognome è : " + (cognomi.indexOf(cognomeUtente) + 1 ) )


console.log(cognomi.indexOf(cognomeUtente) + 1)

console.log(cognomi.sort());