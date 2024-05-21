  /* domanda 1 
  crea una funzione che controlli due numeri interi, ritorna "true" se uno dei due è 50 o se la somma dei due è 50*/
   function checkNumbers(a, b) {
   
    if (a === 50 || b === 50 || (a + b) === 50) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(checkNumbers(50, 10)); // true
  console.log(checkNumbers(25, 25)); // true
  console.log(checkNumbers(20, 30)); // true
  console.log(checkNumbers(20, 20)); // false


 /* domanda 2 
 crea una funzione che rimuova il carattere ad una specifica posizione da una stringa e passa la stringa e la posizione come parametri e ritorna la stringa modificata */


  function removeCharacter(str, position) {
    
    if (position < 0 || position >= str.length) {
      return str; 
    }
  
    
    return str.slice(0, position) + str.slice(position + 1);
  }
  
  
  console.log(removeCharacter("hello", 1)); // "hllo"
  console.log(removeCharacter("world", 4)); // "worl"
  console.log(removeCharacter("javascript", 4)); // "javacript"
  console.log(removeCharacter("openai", 0)); // "penai"
  console.log(removeCharacter("example", 6)); // "exampl"
  
  /* domanda 3
  crea  una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100 e ritorna true se rispecchiano queste condizioni altrimenti ritorna false*/


  function checkNumbersInRange(a, b) {
   
    const inRange1 = (a >= 40 && a <= 60) && (b >= 40 && b <= 60);
    const inRange2 = (a >= 70 && a <= 100) && (b >= 70 && b <= 100);
  
    return inRange1 || inRange2;
  }
  
 
  console.log(checkNumbersInRange(50, 55)); // true (entrambi sono tra 40 e 60)
  console.log(checkNumbersInRange(75, 80)); // true (entrambi sono tra 70 e 100)
  console.log(checkNumbersInRange(45, 85)); // false (uno è tra 40 e 60, l'altro no)
  console.log(checkNumbersInRange(60, 70)); // false (uno è tra 40 e 60, l'altro tra 70 e 100)
  console.log(checkNumbersInRange(90, 95)); // true (entrambi sono tra 70 e 100)
  console.log(checkNumbersInRange(30, 50)); // false (uno è fuori da entrambi gli intervalli)

  /*domanda 4
  crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "los" o "new " altrimenti ritorna false*/

  function checkCityName(city) {
    
    const lowerCaseCity = city.toLowerCase();
    
    
    if (lowerCaseCity.startsWith("los") || lowerCaseCity.startsWith("new")) {
      return city;
    }
    

    return false;
  }
  
  
  console.log(checkCityName("Los Angeles")); // "Los Angeles"
  console.log(checkCityName("New York")); // "New York"
  console.log(checkCityName("los santos")); // "los santos"
  console.log(checkCityName("newark")); // "newark"
  console.log(checkCityName("San Francisco")); // false
  console.log(checkCityName("Boston")); // false
  
  /*domanda 5 
  crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array, l'array deve essere passato come parametro*/

  function sumArrayElements(array) {
   
    let sum = 0;
  
   
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum;
  }
  
  
  console.log(sumArrayElements([1, 2, 3, 4, 5])); // 15
  console.log(sumArrayElements([10, -2, 30, 7])); // 45
  console.log(sumArrayElements([0, 0, 0, 0])); // 0
  console.log(sumArrayElements([-1, -2, -3, -4])); // -10
  console.log(sumArrayElements([5])); // 5
  console.log(sumArrayElements([])); // 0


/* domanda 6 
crea una funzione  che controlli un array non contenga i numeri 1 e 3  se non li contiene ritorna true, altrimenti ritorna false*/

function checkArray(array) {
    
    return !array.includes(1) && !array.includes(3);
  }
  
  
  console.log(checkArray([2, 4, 5])); // true (non contiene 1 o 3)
  console.log(checkArray([1, 2, 4])); // false (contiene 1)
  console.log(checkArray([3, 5, 6])); // false (contiene 3)
  console.log(checkArray([0, 2, 4])); // true (non contiene 1 o 3)
  console.log(checkArray([])); // true (array vuoto non contiene 1 o 3)
  

  /* doamnda 7
  crea una funzione per trovare il tipo di un angolo i cui i gradi sono passati come parametro. Angolo acuto: meno di 90°  ritorna acuto, angolo ottuso: tra i 90° e i 180° ritorna ottuso, angolo retto: 90° ritorna retto, angolo piatto : 180° ritorna piatto  */

  function tipoAngolo(gradi) {
    if (gradi < 0 || gradi > 180) {
      return "Gradi non validi";
    } else if (gradi < 90) {
      return "Acuto";
    } else if (gradi === 90) {
      return "Retto";
    } else if (gradi < 180) {
      return "Ottuso";
    } else {
      return "Piatto";
    }
  }
  
 
  console.log(tipoAngolo(45)); // "Acuto"
  console.log(tipoAngolo(90)); // "Retto"
  console.log(tipoAngolo(120)); // "Ottuso"
  console.log(tipoAngolo(180)); // "Piatto"
  console.log(tipoAngolo(-10)); // "Gradi non validi"
  console.log(tipoAngolo(200)); // "Gradi non validi"
  
  /* domanda 8
  crea una funzione che crei un acronimo a partire da una frase cioè Fabrbrica italiana automobili torino, deve ritornare FIAT*/
  

  function creaAcronimo(frase) {
    
    const parole = frase.split(" ");
  
    
    let acronimo = "";
  
    
    for (let i = 0; i < parole.length; i++) {
      
      acronimo += parole[i][0].toUpperCase();
    }
  
   
    return acronimo;
  }
  
  
  console.log(creaAcronimo("Fabbrica italiana automobili torino")); // "FIAT"





  /* EXTRA */
  
  /*domanda 1
   Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.*/
  function caratterePiùUsato(stringa) {
    
    const conteggio = {};
    for (let carattere of stringa) {
      if (conteggio[carattere]) {
        conteggio[carattere]++;
      } else {
        conteggio[carattere] = 1;
      }
    }
  
   
    let maxOccorrenze = 0;
    let caratterePiùComune = '';
    for (let carattere in conteggio) {
      if (conteggio[carattere] > maxOccorrenze) {
        maxOccorrenze = conteggio[carattere];
        caratterePiùComune = carattere;
      }
    }
  
    return caratterePiùComune;
  }
  
  
  console.log(caratterePiùUsato("abbcccddddeeeee")); // "e"
  console.log(caratterePiùUsato("hello world")); // "l"
  console.log(caratterePiùUsato("banana")); // "a"
   
  /*domanda 2
  Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.*/

  function sonoAnagrammi(stringa1, stringa2) {
    
    const pulisciStringa = str => str.replace(/[^\w]/g, '').toLowerCase();
  
   
    const pulita1 = pulisciStringa(stringa1);
    const pulita2 = pulisciStringa(stringa2);
  
    
    return pulita1.split('').sort().join('') === pulita2.split('').sort().join('');
  }
  
  
  console.log(sonoAnagrammi("Listen", "Silent")); // true
  console.log(sonoAnagrammi("rail safety", "fairy tales")); // true
  console.log(sonoAnagrammi("Eleven plus two", "Twelve plus one")); // true
  console.log(sonoAnagrammi("Hello", "World")); // false
  
  /*domanda 3
   Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data*/


  function trovaAnagrammi(possibiliAnagrammi, parola) {
    
    const pulisciStringa = str => str.replace(/[^\w]/g, '').toLowerCase();
  
    
    const parolaPulita = pulisciStringa(parola);
  
    
    const anagrammiCorretti = possibiliAnagrammi.filter(anagramma => {
      const anagrammaPulito = pulisciStringa(anagramma);
      return anagrammaPulito.split('').sort().join('') === parolaPulita.split('').sort().join('');
    });
  
    return anagrammiCorretti;
  }
  
  
  const possibiliAnagrammi = ["listen", "silent", "enlist", "banana", "rail safety", "fairy tales"];
  const parola = "Listen";
  
  console.log(trovaAnagrammi(possibiliAnagrammi, parola)); // ["listen", "silent", "enlist"]


 /* domanda 4
 Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.*/



 function isPalindromo(stringa) {
    
    const pulisciStringa = str => str.replace(/[^\w]/g, '').toLowerCase();
  
    
    const stringaPulita = pulisciStringa(stringa);
  
    
    const stringaInvertita = stringaPulita.split('').reverse().join('');
  
    
    return stringaPulita === stringaInvertita;
  }
  
 
  console.log(isPalindromo("Anna")); // true
  console.log(isPalindromo("A man, a plan, a canal, Panama")); // true
  console.log(isPalindromo("Palindrome")); // false
  
 /* domanda 5
 Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981*/


 function invertiCifre(numero) {
    
    const stringaNumero = numero.toString();
  
   
    const numeroInvertito = parseInt(stringaNumero.split('').reverse().join(''));
  
    return numeroInvertito;
  }
  
  
  console.log(invertiCifre(189)); // 981
  console.log(invertiCifre(12345)); // 54321
  console.log(invertiCifre(7)); // 7 (Un solo cifra, quindi non cambia)
  
 /* domanda 6
  Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
  Es.
X = 2
'# '
'##'
X = 3
'# '
'## '
'###'*/

 function stampaScala(X) {
   
    if (X <= 0 || !Number.isInteger(X)) {
      console.log("Il parametro deve essere un numero intero positivo.");
      return;
    }
  
   
    for (let i = 1; i <= X; i++) {
      console.log('#'.repeat(i));
    }
  }
  
  
  console.log("Scala con X = 2:");
  stampaScala(2);
  
  console.log("\nScala con X = 3:");
  stampaScala(3);

  /*domanda 7
  Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC” */
  
  function stringaAlContrario(stringa) {
   
    return stringa.split('').reverse().join('');
  }
  
  console.log(stringaAlContrario("Ciao")); // "oaiC"
  console.log(stringaAlContrario("Hello, World!")); // "!dlroW ,olleH"
  
/*domanda 8

Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.

Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]*/


function divideArray(array, Y) {
    
    if (array.length === 0 || Y <= 0) {
      return "Array vuoto o valore Y non valido";
    }
  
    
    const numeroDiSottoArray = Math.ceil(array.length / Y);
  
   
    const sottoArray = [];
    for (let i = 0; i < numeroDiSottoArray; i++) {
      sottoArray.push(array.slice(i * Y, (i + 1) * Y));
    }
  
    return sottoArray;
  }
  
  
  console.log(divideArray([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
  console.log(divideArray([1, 2, 3, 4, 5], 4)); // [[1, 2, 3, 4], [5]]
  console.log(divideArray([], 3)); // "Array vuoto o valore Y non valido"
  

 /* domanda 9
 Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
 
 Es.
X = 3
' # '
' ### '
'#####'*/


 function stampaPiramide(X) {
 
    if (X <= 0 || !Number.isInteger(X)) {
      console.log("Il parametro deve essere un numero intero positivo.");
      return;
    }
  
    
    for (let i = 1; i <= X; i++) {
      const spaziVuoti = ' '.repeat(X - i);
      const blocchi = '#'.repeat(2 * i - 1);
      console.log(spaziVuoti + blocchi + spaziVuoti);
    }
  }
  
  
  console.log("Piramide con X = 3:");
  stampaPiramide(3);
  
  console.log("\nPiramide con X = 5:");
  stampaPiramide(5);
  

  /*domanda 10
 Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
   
   Es. N = 2
[[1, 2],[4, 3]]
N = 3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]
N = 4
[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]

   */

   function matriceSpirale(N) {
    
    const matrice = Array.from({ length: N }, () => Array.from({ length: N }, () => null));
  
  
    let superiore = 0,
      inferiore = N - 1,
      sinistra = 0,
      destra = N - 1;
  
   
    let contatore = 1;
  
    while (superiore <= inferiore && sinistra <= destra) {
      
      for (let i = sinistra; i <= destra; i++) {
        matrice[superiore][i] = contatore++;
      }
      superiore++;
  
      
      for (let i = superiore; i <= inferiore; i++) {
        matrice[i][destra] = contatore++;
      }
      destra--;
  
      
      for (let i = destra; i >= sinistra; i--) {
        matrice[inferiore][i] = contatore++;
      }
      inferiore--;
  
      
      for (let i = inferiore; i >= superiore; i--) {
        matrice[i][sinistra] = contatore++;
      }
      sinistra++;
    }
  
    return matrice;
  }
  
  
  console.log(matriceSpirale(2)); // [[1, 2],[4, 3]]
  console.log(matriceSpirale(3)); // [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
  console.log(matriceSpirale(4)); // [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
  